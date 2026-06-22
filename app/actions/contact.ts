type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export const submitContactForm = async (
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  // validate

  // send email

  return {
    success: true,
    message: "Thanks for reaching out.",
    errors: {},
  };
};
