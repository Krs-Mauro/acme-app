"use client";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Input, FormControl, FormErrorMessage } from "@chakra-ui/react";
import exp from "constants";

type inputFieldTypes = {
  name: "name" | "description" | "owner" | "email";
  placeholder: string;
  register: UseFormRegister<{
    name: string;
    description: string;
    owner: string;
    email: string;
  }>;
  errors: FieldErrors<{
    name: string;
    description: string;
    owner: string;
    email: string;
  }>;
};
const InputField = ({
  name,
  placeholder,
  register,
  errors,
}: inputFieldTypes) => {
  return (
    <FormControl isInvalid={Boolean(errors[name])}>
      <Input
        m={2}
        {...register(name)}
        placeholder={placeholder}
        isInvalid={Boolean(errors[name])}
      />
      <FormErrorMessage m={2}>{errors[name]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
