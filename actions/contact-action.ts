"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  full_name: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  title: z.string(),
  message: z.string(),
});

export async function contactAction(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const validatedData = contactSchema.safeParse({
    full_name: formData.get("full_name"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
    title: formData.get("title"),
    message: formData.get("message"),
  });

  if (!validatedData.success) {
    console.log("Validation failed:", validatedData.error.errors);
    return;
  }

  try {
    const { full_name, email, phone_number, title, message } =
      validatedData.data;

    const sent = await resend.emails.send({
      to: "dev@changemaker-network.org",
      from: "dev@changemaker-network.org",
      subject: `New Contact Form Submission: ${title}`,
      text: `
        Name: ${full_name}
        Email: ${email}
        Phone Number: ${phone_number}
        Title: ${title}
        Message: ${message}
      `,
    });

    console.log(sent);
    console.log("Message sent successfully");
  } catch (error) {
    console.log("An error occurred while sending the message:", error);
  }
}
