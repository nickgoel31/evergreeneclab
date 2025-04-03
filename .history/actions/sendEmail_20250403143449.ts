"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
    fullName: z.string().min(2, {
      message: "Full Name must be at least 2 characters.",
    }),
    email: z.string().email(),
    subject: z.string().min(2, {
      message: "Subject must be at least 2 characters.",
    }),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters.",
    }),
  })

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
export async function sendEmailContact(formData: z.infer<typeof contactFormSchema>) {
  try {
    // Validate form data using Zod
    const parsedData = contactFormSchema.safeParse(formData);
    if (!parsedData.success) {
      return { success: false, message: parsedData.error.errors[0].message };
    }
    const {
        fullName,
        email,
        subject,
        message,
    } = parsedData.data;

    // Email options
    const mailOptions = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      to: "harshgoel2004@gmail.com", // Your email
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${fullName}\nEmail: ${email}\n\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
}
