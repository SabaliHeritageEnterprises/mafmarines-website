import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, inquiry, message } = await request.json();

    if (!name || !email || !inquiry || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
      console.error("❌ Missing SMTP environment variables");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const port = Number(SMTP_PORT);
    const secure = port === 465;

    console.log("📧 SMTP Config:", { host: SMTP_HOST, port, secure, user: SMTP_USER });

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
      debug: true,
      logger: true,
    });

    const mailOptions = {
      from: `"Mafmarines Contact Form" <${SMTP_USER}>`,
      to: "info@mafmarinesolution.com",
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiry}\nMessage: ${message}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Inquiry Type:</strong> ${inquiry}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr>
        <p style="color: #888; font-size: 12px;">Sent from Mafmarines Solutions website.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Email send error:", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error.message} (Code: ${error.code})` },
      { status: 500 }
    );
  }
}