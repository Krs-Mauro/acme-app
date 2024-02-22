import { render, screen } from "@testing-library/react";
import BoldText from "@/components/BoldText";

describe("BoldText", () => {
  it("renders text in heading", () => {
    render(<BoldText size="lg" text="Hello World" />);

    const heading = screen.getByRole("heading", { name: "Hello World" });

    expect(heading).toBeInTheDocument();
  });
});
