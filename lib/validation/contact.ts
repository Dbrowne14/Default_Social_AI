import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().optional(),
  email: z.email("Please enter a valid email address."),
  enquiryType: z.string(),
  message: z.string().min(
    20,
    "Please provide a little more detail."
  ),
});