// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, budget, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // ========================
    // SEND EMAIL
    // ========================
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const recipientEmails = [
      "muzammilgullgull@gmail.com",
      "kelleyjackson004@gmail.com"
    ];

    await transporter.sendMail({
      from: `"TechCore Studio" <${process.env.EMAIL_USER}>`,
      to: recipientEmails,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}