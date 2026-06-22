import { contactSchema } from "@/lib/validation/contact";
import { z } from "zod";
import {Resend}  from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
  errors: {
    name?: string[];
    company?: string[];
    email?: string[];
    enquiryType?: string[];
    message?: string[];
  };
};

export const submitContactForm = async (
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const values = {
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    enquiryType: formData.get("enquiryType"),
    message: formData.get("message"),
  };

  // validate
  const result = contactSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  
  // send email
  const { name, company, email, enquiryType, message } = result.data;

  const { error } = await resend.emails.send({
    from: "Default Social <onboarding@resend.dev>",
    to: ["info@defaultmedia.com"],
    replyTo: email,
    subject: `New enquiry: ${enquiryType}`,
    html: `
      <h2>New website enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Enquiry type:</strong> ${enquiryType}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
      errors: {},
    };
  }

  return {
    success: true,
    message: "Thanks for reaching out. We’ll get back to you shortly.",
    errors: {},
  };

};
