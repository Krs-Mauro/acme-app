import { z } from "zod";

const textErrorMessages = {
  required_error: "This field is required",
  invalid_type_error: "This field requires a string from 3 to 64 characters",
};

const schema = z
  .object({
    name: z.string(textErrorMessages).min(3).max(64),
    description: z
      .string({
        required_error: "This field is required",
        invalid_type_error:
          "Description must be a string from 6 to 256 characters",
      })
      .min(6)
      .max(256),
    owner: z.string(textErrorMessages).min(3).max(64),
    email: z
      .string({
        required_error: "This field is required",
        invalid_type_error:
          "This field must be a valid e-mail smaller than 64 characters",
      })
      .max(64),
  })
  .required();

export default schema;
