"use client"

import React from 'react'
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { servicesData } from '@/data/services'

const enquiryFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().optional(),
  serviceOfInterest: z.string().min(1, {
    message: "Please select a service of interest.",
  }),
  requirements: z.string().min(10, {
    message: "Requirements must be at least 10 characters.",
  }),
})

const EnquiryForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof enquiryFormSchema>>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceOfInterest: "",
      requirements: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof enquiryFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
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
        <div className='flex items-center gap-4 w-full'>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" className='bg-white w-full' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" className='bg-white' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> 
        </div>
        <FormField
          control={form.control}
          name="serviceOfInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service of Interest</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="bg-white w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {servicesData.map((service) => (
                      <SelectItem key={service.id} value={service.slug}>{service.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Requirements</FormLabel>
              <FormControl>
                <Textarea placeholder="Please describe your requirements in detail..." className='bg-white min-h-32 max-h-64' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full flex items-center justify-center'>Submit Enquiry</Button>
      </form>
    </Form>
  )
}

export default EnquiryForm