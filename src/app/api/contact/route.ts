import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    console.log("📥 Reading contact form data...");

    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!smtpEmail) {
      console.error("❌ SMTP_EMAIL is missing");
      return NextResponse.json(
        {
          success: false,
          error: "SMTP_EMAIL is not configured",
        },
        { status: 500 }
      );
    }

    if (!smtpPassword) {
      console.error("❌ SMTP_PASSWORD is missing");
      return NextResponse.json(
        {
          success: false,
          error: "SMTP_PASSWORD is not configured",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      name,
      email,
      company,
      budget,
      service,
      message,
    } = body;

    console.log("👤 Name:", name);
    console.log("📧 Email:", email);
    console.log("🏢 Company:", company);
    console.log("💼 Service:", service);

    // Validate required fields
    if (!name || !email || !message) {
      console.error("❌ Missing required fields");

      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    // =========================================================
    // 1. SAVE LEAD TO SUPABASE FIRST
    // =========================================================

    console.log("💾 Saving contact lead to Supabase...");

    const { data: savedLead, error: databaseError } = await supabase
      .from("contact_messages")
      .insert([
        {
          name,
          email,
          company: company || "",
          budget: budget || "",
          service: service || "",
          message,
        },
      ])
      .select()
      .single();

    if (databaseError) {
      console.error("❌ Supabase error:", databaseError);

      return NextResponse.json(
        {
          success: false,
          databaseSaved: false,
          emailSent: false,
          error: "Unable to save your message. Please try again.",
          details:
            process.env.NODE_ENV === "development"
              ? databaseError.message
              : undefined,
        },
        { status: 500 }
      );
    }

    console.log("✅ Contact lead saved to Supabase!");
    console.log("🆔 Lead ID:", savedLead?.id);

    // =========================================================
    // 2. CREATE GMAIL TRANSPORTER
    // =========================================================

    console.log("📧 Creating Gmail transporter...");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    // =========================================================
    // 3. VERIFY GMAIL CONNECTION
    // =========================================================

    console.log("🔍 Verifying Gmail connection...");

    try {
      await transporter.verify();
      console.log("✅ Gmail connection verified.");
    } catch (smtpVerifyError) {
      console.error("❌ Gmail verification failed:", smtpVerifyError);

      // IMPORTANT:
      // Lead is already saved in Supabase.
      // We don't fail the whole request if email fails.

      return NextResponse.json({
        success: true,
        databaseSaved: true,
        emailSent: false,
        recordId: savedLead?.id,
        warning:
          "Your message was received successfully, but email notification could not be sent.",
      });
    }

    // =========================================================
    // 4. BUILD RECIPIENT EMAIL LIST
    // =========================================================

    const recipientEmails: string[] = [];

    if (smtpEmail) {
      recipientEmails.push(smtpEmail);
    }

    if (adminEmail) {
      recipientEmails.push(adminEmail);
    }

    if (recipientEmails.length === 0) {
      console.error("❌ No recipient email addresses configured.");

      return NextResponse.json({
        success: true,
        databaseSaved: true,
        emailSent: false,
        recordId: savedLead?.id,
        warning:
          "Your message was received successfully, but no email recipient is configured.",
      });
    }

    // =========================================================
    // 5. SEND EMAIL NOTIFICATION
    // =========================================================

    console.log("📤 Sending contact lead notification...");

    try {
      await transporter.sendMail({
        from: `"TechCore Studio" <${smtpEmail}>`,
        to: recipientEmails,
        replyTo: email,
        subject: `New Contact Form Lead - ${name}`,

        text: `
New Contact Form Lead

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Budget: ${budget || "Not provided"}
Service: ${service || "Not provided"}

Message:
${message}

Lead ID: ${savedLead?.id || "N/A"}
        `.trim(),

        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 30px; color: #222;">

            <h2 style="margin-bottom: 20px;">
              New Contact Form Lead
            </h2>

            <div style="background: #f7f7f7; padding: 20px; border-radius: 10px;">

              <p>
                <strong>Name:</strong><br />
                ${name}
              </p>

              <p>
                <strong>Email:</strong><br />
                ${email}
              </p>

              <p>
                <strong>Company:</strong><br />
                ${company || "Not provided"}
              </p>

              <p>
                <strong>Budget:</strong><br />
                ${budget || "Not provided"}
              </p>

              <p>
                <strong>Service:</strong><br />
                ${service || "Not provided"}
              </p>

              <p>
                <strong>Message:</strong><br />
                ${message}
              </p>

              <p>
                <strong>Lead ID:</strong><br />
                ${savedLead?.id || "N/A"}
              </p>

            </div>

            <div style="margin-top: 25px;">
              <a
                href="https://techcorestudio.com/admin/leads"
                style="
                  display: inline-block;
                  background: #2563eb;
                  color: #ffffff;
                  padding: 12px 20px;
                  text-decoration: none;
                  border-radius: 6px;
                  font-weight: bold;
                "
              >
                View Leads Dashboard
              </a>
            </div>

            <p style="margin-top: 30px; color: #777; font-size: 13px;">
              This notification was automatically generated by the TechCore Studio website.
            </p>

          </div>
        `,
      });

      console.log("✅ Email notification sent.");

      return NextResponse.json({
        success: true,
        databaseSaved: true,
        emailSent: true,
        recordId: savedLead?.id,
      });
    } catch (emailError) {
      console.error("❌ Email sending failed:", emailError);

      // IMPORTANT:
      // Database save already succeeded.
      // So we still return success.

      return NextResponse.json({
        success: true,
        databaseSaved: true,
        emailSent: false,
        recordId: savedLead?.id,
        warning:
          "Your message was received successfully, but the email notification could not be sent.",
      });
    }
  } catch (error) {
    console.error("❌ Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        databaseSaved: false,
        emailSent: false,
        error: "Something went wrong. Please try again.",
        details:
          process.env.NODE_ENV === "development"
            ? error instanceof Error
              ? error.message
              : String(error)
            : undefined,
      },
      { status: 500 }
    );
  }
}