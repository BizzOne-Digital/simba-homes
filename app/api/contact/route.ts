import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Check env vars
    if (
      !process.env.GMAIL_USER ||
      !process.env.GMAIL_APP_PASSWORD ||
      !process.env.CONTACT_EMAIL_TO
    ) {
      console.error("Missing environment variables");

      return NextResponse.json(
        {
          error:
            "Server configuration error. Missing email environment variables.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify Gmail connection first
    await transporter.verify();

    await transporter.sendMail({
      from: `"Simba Homes Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `New Inquiry — ${service || "General"} | ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Service:</strong> ${service || "-"}</p>
        <p><strong>Budget:</strong> ${budget || "-"}</p>

        <hr/>

        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Simba Homes Ltd" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your inquiry",
      html: `
        <h2>Thank you ${name}</h2>

        <p>We have received your inquiry and will contact you shortly.</p>

        <p>Simba Homes Ltd</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: any) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      {
        error: error?.message || "Failed to send email",
      },
      { status: 500 }
    );
  }
}