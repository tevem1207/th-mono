"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui";
import { useToast } from "@repo/ui/hooks";
import { cn } from "@repo/ui/lib/utils";
import React, {
  InputHTMLAttributes,
  PropsWithoutRef,
  TextareaHTMLAttributes,
} from "react";
import { FieldErrors, useForm } from "react-hook-form";

import { ContactFormValues, ContactSchema } from "@/lib/schemas";

export const ContactForm = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Error submitting form");
      return;
    }
    toast({
      title: "Message sent successfully!",
      description: "I will get back to you soon.",
    });

    reset();
  };
  const onError = (errors: FieldErrors<ContactFormValues>) => {
    console.error("Error submitting form", errors);
    toast({
      title: "Error sending message",
      description: "Please check your input and try again.",
      variant: "destructive",
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <ContactFormInput
            id="name"
            type="text"
            placeholder="Your Name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <ContactFormInput
            id="email"
            type="text"
            placeholder="Your Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <ContactFormInput
          id="subject"
          type="text"
          placeholder="Your Subject"
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <ContactFormTextArea
          id="message"
          rows={5}
          placeholder="Your message"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

const ContactFormInput = (
  props: PropsWithoutRef<InputHTMLAttributes<HTMLInputElement>>
) => {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      )}
    />
  );
};

const ContactFormTextArea = (
  props: PropsWithoutRef<TextareaHTMLAttributes<HTMLTextAreaElement>>
) => {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      )}
    />
  );
};
