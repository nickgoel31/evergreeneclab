"use client"

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import { sendEmailContact } from '@/actions/sendEmail'

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

const ContactForm = () => {
  const [status, setStatus] = useState("");
  // 1. Define your form.
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setStatus("Sending...");
    
    const result = await sendEmailContact(values);

    if (result.success) {
      setStatus("Message sent successfully!");
      alert("Message sent successfully!");
      form.reset(); // Reset the form after successful submission
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" className='bg-white' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" className='bg-white' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="How can we help you?" className='bg-white' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Please describe your request in detail..." className='bg-white min-h-32 max-h-64' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full flex items-center justify-center'>Send message</Button>
        {status && <p className="text-center">{status}</p>}
      </form>
    </Form>
  )
}

export default ContactForm