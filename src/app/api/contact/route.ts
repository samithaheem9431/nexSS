import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Contact } from "@/lib/models/Contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Name, email, service, and message are required" },
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

    await connectDB();

    const contact = await Contact.create({
      name,
      email,
      phone: phone || "",
      service,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We will get back to you soon.",
        id: contact._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error("Fetch contacts error:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
