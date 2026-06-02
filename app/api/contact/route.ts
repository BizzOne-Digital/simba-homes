import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      service,
      budget,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "mail.simbahomes.ca",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.verify();

    await Promise.all([
      transporter.sendMail({
        from: `"Simba Homes Website" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_EMAIL_TO,
        replyTo: email,
        subject: `New Inquiry — ${service || "General"} | ${name}`,
        html: `
          <h2>New Website Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <p><strong>Service:</strong> ${service || "-"}</p>
          <p><strong>Budget:</strong> ${budget || "-"}</p>

          <hr />

          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),

      transporter.sendMail({
        from: `"Simba Homes Ltd" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "We received your inquiry",
        html: `
          <h2>Thank you ${name}</h2>

          <p>
            We have received your inquiry and will get back to you shortly.
          </p>

          <p>
            Simba Homes Ltd
          </p>
        `,
      }),
    ]);

    return NextResponse.json({
      success: true,
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