import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// SUPABASE DISABLED 2026-11-06 (Kelley): the live server cannot reach
// Supabase at all (POST /api/send returned 500 "TypeError: fetch failed"
// after ~6 minutes), so the questionnaire no longer saves to the database.
// Submissions are EMAIL-ONLY to kelleyjackson004@gmail.com.
// The Supabase insert block below is COMMENTED OUT in place (not deleted) —
// re-enable it once the Supabase project is reachable again.
// import { supabase } from "@/lib/supabase";

// Single notification recipient: Kelley Jackson.
const ADMIN_NOTIFY_EMAIL = "kelleyjackson004@gmail.com";

export async function POST(req: Request) {
  console.log("");
  console.log("========================================");
  console.log("🚀 /api/send - New questionnaire request");
  console.log("========================================");

  try {
    console.log("🔍 Checking environment variables...");

    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;

    console.log(
      "   SMTP_EMAIL:",
      smtpEmail ? "✓" : "❌"
    );

    console.log(
      "   SMTP_PASSWORD:",
      smtpPassword ? "✓ (set)" : "❌"
    );

    // ----------------------------------------
    // READ REQUEST
    // ----------------------------------------

    console.log("📥 Reading questionnaire data...");

    const data = await req.json();

    console.log("👤 Client:", data.clientName);
    console.log("📧 Email:", data.email);

    // ----------------------------------------
    // BASIC VALIDATION
    // ----------------------------------------

    if (!data.clientName || !data.email) {
      console.log("❌ Client name or email missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Client name and email are required.",
        },
        { status: 400 }
      );
    }

    // ----------------------------------------
    // DATABASE SAVE — DISABLED (Supabase unreachable)
    // ----------------------------------------
    //
    // const questionnaire = {
    //   client_name: data.clientName || null,
    //   email: data.email || null,
    //   phone: data.phone || null,
    //
    //   industry: data.industry || null,
    //
    //   business_name: data.businessName || null,
    //   business_slogan: data.businessSlogan || null,
    //
    //   logo_choice: data.logoChoice || null,
    //
    //   has_website: data.hasWebsite || null,
    //   existing_website_url: data.existingWebsiteUrl || null,
    //
    //   purpose: data.purpose || null,
    //
    //   color_preferences: data.colorPreferences || null,
    //
    //   competitors: data.competitors || null,
    //
    //   payment_integration: data.paymentIntegration || null,
    //
    //   specific_requirements:
    //     data.specificRequirements || null,
    //
    //   content_pages: data.contentPages || null,
    //
    //   other_suggestions:
    //     data.otherSuggestions || null,
    //
    //   has_domain: data.hasDomain || null,
    //
    //   domain_provider:
    //     data.domainProvider || null,
    //
    //   domain_username:
    //     data.domainUsername || null,
    //
    //   has_hosting:
    //     data.hasHosting || null,
    //
    //   hosting_provider:
    //     data.hostingProvider || null,
    //
    //   hosting_username:
    //     data.hostingUsername || null,
    //
    //   notes: data.notes || null,
    // };
    //
    // console.log("💾 Saving questionnaire to Supabase...");
    //
    // const { data: savedRecord, error: supabaseError } =
    //   await supabase
    //     .from("website_questionnaires")
    //     .insert(questionnaire)
    //     .select("id, created_at")
    //     .single();
    //
    // if (supabaseError) {
    //   console.error("");
    //   console.error("❌ SUPABASE INSERT FAILED");
    //   console.error("Code:", supabaseError.code);
    //   console.error("Message:", supabaseError.message);
    //   console.error("Details:", supabaseError.details);
    //   console.error("Hint:", supabaseError.hint);
    //
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       databaseSaved: false,
    //       emailSent: false,
    //       step: "supabase",
    //       error: supabaseError.message,
    //     },
    //     { status: 500 }
    //   );
    // }
    //
    // console.log("✅ Supabase record saved!");
    // console.log("🆔 Record ID:", savedRecord?.id);

    // ----------------------------------------
    // EMAIL NOTIFICATION (email-only mode)
    // ----------------------------------------

    // Email-only mode: without SMTP there is no delivery at all, so a
    // missing configuration must FAIL the submission, never fake success.
    if (!smtpEmail || !smtpPassword) {
      console.log("❌ SMTP credentials are missing - cannot send email.");

      return NextResponse.json(
        {
          success: false,
          emailSent: false,
          error:
            "Email delivery is not configured. Please try again later or contact us directly.",
        },
        { status: 503 }
      );
    }

    try {
      console.log("📧 Creating Gmail transporter...");

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpEmail,
          pass: smtpPassword,
        },
      });

      console.log("🔍 Verifying Gmail connection...");

      await transporter.verify();

      console.log("✅ Gmail connection verified.");

      // ----------------------------------------
      // EMAIL CONTENT
      // ----------------------------------------

      const emailText = `
NEW WEBSITE WORKBOOK SUBMISSION
================================

Client Information
------------------
Name: ${data.clientName || ""}
Email: ${data.email || ""}
Phone: ${data.phone || ""}
Industry: ${data.industry || ""}

Business Information
--------------------
Business Name: ${data.businessName || ""}
Business Slogan: ${data.businessSlogan || ""}

Logo
----
Logo Choice: ${data.logoChoice || ""}

Website
-------
Has Website: ${data.hasWebsite || ""}
Existing Website:
${data.existingWebsiteUrl || ""}

Website Purpose
---------------
${data.purpose || ""}

Colors
------
${data.colorPreferences || ""}

Competitors
-----------
${data.competitors || ""}

Payment Integration
-------------------
${data.paymentIntegration || ""}

Specific Requirements
---------------------
${data.specificRequirements || ""}

Content Pages
-------------
${data.contentPages || ""}

Other Suggestions
-----------------
${data.otherSuggestions || ""}

Domain
------
Has Domain: ${data.hasDomain || ""}
Domain Provider: ${data.domainProvider || ""}
Domain Username: ${data.domainUsername || ""}

Hosting
-------
Has Hosting: ${data.hasHosting || ""}
Hosting Provider: ${data.hostingProvider || ""}
Hosting Username: ${data.hostingUsername || ""}

Notes
-----
${data.notes || ""}

--------------------------------
Database: disabled (email-only mode, Supabase unreachable)
--------------------------------

SECURITY NOTE:
Domain and hosting passwords were intentionally NOT included in this email.
`;

      console.log("📤 Sending email notification...");

      await transporter.sendMail({
        from: smtpEmail,
        to: ADMIN_NOTIFY_EMAIL,
        subject: `New Website Workbook - ${data.clientName}`,
        text: emailText,
        replyTo: data.email,
      });

      console.log("✅ Email notification sent.");

      return NextResponse.json({
        success: true,
        emailSent: true,
      });
    } catch (emailError: any) {
      console.error("");
      console.error("⚠️ EMAIL FAILED");
      console.error("Message:", emailError?.message);

      // IMPORTANT:
      // Email-only mode: if the email fails, the submission is lost.
      // Never fake success — return an error so the visitor sees it
      // and the form does not pretend the questionnaire was received.

      return NextResponse.json(
        {
          success: false,
          emailSent: false,
          error:
            emailError?.message ||
            "Could not send the questionnaire. Please try again.",
        },
        { status: 503 }
      );
    }
  } catch (error: any) {
    console.error("");
    console.error("========================================");
    console.error("❌ API ERROR");
    console.error("========================================");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        emailSent: false,
        error: error?.message || "Unknown server error",
      },
      { status: 500 }
    );
  }
}
