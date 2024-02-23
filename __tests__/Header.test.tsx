import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  it('renders home link when source is "form"', () => {
    render(<Header source="form" />);

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();
  });

  it('renders form link when source is not "form"', () => {
    render(<Header source="index" />);

    const formLink = screen.getByRole("link", { name: "Form" });
    expect(formLink).toBeInTheDocument();
  });

  it("renders LoginButton", () => {
    render(<Header source="form" />);

    const loginButton = screen.getByTestId("loginButton");
    expect(loginButton).toBeInTheDocument();
  });
});
