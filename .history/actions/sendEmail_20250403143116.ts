"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// Define validation schema using Zod
const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters."),
  email: z.string().email("Invalid email."),
  subject: z.string().min(2, "Subject must be at least 2 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Server Action function
export async function sendEmail(formData: FormData) {
  try {
    // Validate form data using Zod
    const parsedData = contactFormSchema.parse({
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    // Email options
    const mailOptions = {
      from: `"${parsedData.fullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // Your email
      subject: `New Contact Form Submission: ${parsedData.subject}`,
      text: `Name: ${parsedData.fullName}\nEmail: ${parsedData.email}\n\n${parsedData.message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
}
