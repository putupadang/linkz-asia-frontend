import { toast } from "react-toastify";
import { z } from "zod";

export const validateForm = (form: any, schemaForm: any) => {
  const schema = schemaForm;

  try {
    const data = schema.parse(form);
    return {
      valid: true,
      data: data,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.errors.map((err) => {
        toast.error(err.message);
      });
      return {
        valid: false,
        errors: error.errors,
      };
    } else {
      return error;
    }
  }
};
