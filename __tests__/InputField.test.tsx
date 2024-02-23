import { FieldErrors } from "react-hook-form";
import InputField from "@/components/InputField";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

type errorType = FieldErrors<{
  name: string;
  description: string;
  owner: string;
  email: string;
}>;

const register = jest.fn();

const errors: errorType = {
  name: {
    message: "String must contain at least 3 character(s)",
    type: "required",
  },
  description: {
    message: "String must contain at least 3 character(s)",
    type: "required",
  },
  owner: {
    message: "String must contain at least 3 character(s)",
    type: "required",
  },
  email: {
    message: "String must contain at least 3 character(s)",
    type: "required",
  },
};

describe("InputField", () => {
  it("renders the input with placeholder", () => {
    render(
      <InputField
        name="name"
        placeholder="Enter name"
        register={register}
        errors={errors}
      />
    );

    const input = screen.getByPlaceholderText("Enter name");
    expect(input).toBeInTheDocument();
  });

  it("calls register function on input change", () => {
    render(
      <InputField
        name="name"
        placeholder="Enter name"
        register={register}
        errors={errors}
      />
    );

    const input = screen.getByPlaceholderText("Enter name");
    userEvent.type(input, "John");
    expect(register).toHaveBeenCalled();
  });

  it("displays error message", () => {
    errors.name = { message: "Name required", type: "required" };

    render(
      <InputField
        name="name"
        placeholder="Enter name"
        register={register}
        errors={errors}
      />
    );

    const errorMessage = screen.getByText("Name required");
    expect(errorMessage).toBeInTheDocument();
  });
});
