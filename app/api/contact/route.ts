import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, inquiry, message } = await request.json();

    // Validate required fields
    if (!name || !email || !inquiry || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Check environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
      console.error("❌ Missing SMTP environment variables");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // Determine secure based on port (465 = SSL, 587 = TLS)
    const port = Number(SMTP_PORT);
    const secure = port === 465;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // may be needed for self-signed certs
      },
    });

    // Email content
    const mailOptions = {
      from: `"Mafmarines Contact Form" <${SMTP_USER}>`,
      to: "info@mafmarinesolution.com",
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Inquiry Type: ${inquiry}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Inquiry Type:</strong> ${inquiry}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr>
        <p style="color: #888; font-size: 12px;">This message was sent from the Mafmarines Solutions website contact form.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Email send error:", error);

    // Return a more specific error message if available
    const errorMessage =
      error.code === "EAUTH"
        ? "Authentication failed. Please check your email credentials."
        : error.code === "ECONNECTION"
        ? "Could not connect to the mail server. Please try again later."
        : "Failed to send email. Please try again later.";

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}