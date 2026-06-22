import { contactSchema } from "@/lib/validation/contact";
import { z } from "zod";

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

  return {
    success: true,
    message: "Thanks for reaching out.",
    errors: {},
  };
  // send email


};
