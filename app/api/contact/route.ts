import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, inquiry, message } = await request.json();

    if (!name || !email || !inquiry || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Read SMTP settings from environment variables
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;

    if (!host || !user || !pass) {
      console.error("❌ Missing SMTP environment variables");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for others
      auth: { user, pass },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `"Mafmarines Solutions" <${user}>`,
      to: "director@mafmarinesolution.com",
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Inquiry Type:</strong> ${inquiry}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p style="color: #888; font-size: 12px;">Sent from Mafmarines Solutions website.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("❌ Email send error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}