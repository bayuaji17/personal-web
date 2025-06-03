"use server";
import { Resend } from "resend";
import { formSchema } from "./schema";
import { z } from "zod";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendEmail(formData: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(formData);
  if (!parsed.success) {
    return {
      status: "error",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = parsed.data;
  try {
    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["nugroho.bayuaji17@gmail.com"], 
      subject,
      html: `
        <div>
          <h2>${subject}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (error) {
      return { status: "error", message: "Failed to send email." };
    }

    return { status: "success", message: "Email sent successfully." };
  } catch {
    return { status: "error", message: "Server error." };
  }
}
