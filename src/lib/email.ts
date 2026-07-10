import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactEmail = process.env.CONTACT_EMAIL || siteConfig.email;

  if (!smtpUser || !smtpPass) {
    throw new Error(
      "Email service is not configured. Please set SMTP_USER and SMTP_PASS."
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const phoneLine = data.phone
    ? `<tr><td style="padding:8px 0;color:#666;">Phone</td><td style="padding:8px 0;color:#111;">${data.phone}</td></tr>`
    : "";

  await transporter.sendMail({
    from: `"Nexasoft Studio" <${smtpUser}>`,
    to: contactEmail,
    replyTo: data.email,
    subject: `New Contact from ${data.name} - Nexasoft Studio`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#06b6d4;border-bottom:2px solid #06b6d4;padding-bottom:10px;">
          New Contact Form Submission
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;color:#666;width:120px;">Name</td>
            <td style="padding:8px 0;color:#111;font-weight:bold;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#666;">Email</td>
            <td style="padding:8px 0;color:#111;">
              <a href="mailto:${data.email}">${data.email}</a>
            </td>
          </tr>
          ${phoneLine}
          <tr>
            <td style="padding:8px 0;color:#666;vertical-align:top;">Message</td>
            <td style="padding:8px 0;color:#111;white-space:pre-wrap;">${data.message}</td>
          </tr>
        </table>
        <p style="margin-top:24px;color:#999;font-size:12px;">
          Sent from Nexasoft Studio contact form
        </p>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}

Message:
${data.message}
    `.trim(),
  });
}
