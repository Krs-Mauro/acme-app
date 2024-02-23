import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import {
  loggedWithItems,
  loggedWithoutItems,
  notLogged,
} from "@/lib/testingConstants";

let mockValues = {};

jest.mock("../src/lib/store", () => ({
  __esModule: true,
  default: jest.fn(),
}));

beforeEach(() => {
  require("../src/lib/store").default.mockImplementation(() => mockValues);
});

describe("Home", () => {
  it("renders heading", () => {
    mockValues = notLogged;
    render(<Home />);

    const heading = screen.getByRole("heading");
    const loginButtons = screen.getAllByRole("button", { name: "Login" });
    const formButton = screen.getByRole("button", { name: "Form" });

    expect(heading).toHaveTextContent("ACME - APP");
    expect(loginButtons).toHaveLength(2);
    expect(formButton).toBeInTheDocument();
  });

  it("renders Card for each item", () => {
    mockValues = loggedWithItems;

    render(<Home />);

    const cards = screen.getAllByTestId("card");

    expect(cards).toHaveLength(2);
  });

  it("renders message for no items", () => {
    mockValues = loggedWithoutItems;

    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /start by creating a new request with the form button/i,
      })
    ).toBeInTheDocument();
  });
});
