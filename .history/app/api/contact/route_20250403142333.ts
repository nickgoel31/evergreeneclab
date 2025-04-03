import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, email, message, subject } = await req.json();

    const response = await resend.emails.send({
      from: email, // Use a verified domain email
      to: "harshgoel2004@gmail.com", // Change this to your receiving email
      subject: `New Contact Form Submission from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nSubject: ${subject} \nMessage: ${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
