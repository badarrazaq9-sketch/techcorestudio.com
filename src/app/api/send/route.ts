import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { success: false, error: "EMAIL_USER or EMAIL_PASS is missing." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Verify Gmail connection before sending
    await transporter.verify();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: [
        process.env.EMAIL_USER,
        process.env.SELLER_EMAIL,
        process.env.PERSONAL_EMAIL,
      ]
        .filter(Boolean)
        .join(","),

      subject: "New Website Workbook",
      text: JSON.stringify(data, null, 2),
      replyTo: data.email,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}