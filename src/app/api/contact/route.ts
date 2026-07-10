import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Contact } from "@/lib/models/Contact";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const contactData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      message: message.trim(),
    };

    await sendContactEmail(contactData);

    try {
      await connectDB();
      await Contact.create(contactData);
    } catch (dbError) {
      console.error("Database save failed (email sent):", dbError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We will get back to you soon.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Failed to submit form. Please try again later.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
