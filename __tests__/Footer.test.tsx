import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders heading with app name", () => {
    render(<Footer />);

    const heading = screen.getByRole("heading", { name: "ACME - APP" });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("ACME - APP");
    expect(heading).toHaveStyle({ color: "gray.50" });
  });
});
