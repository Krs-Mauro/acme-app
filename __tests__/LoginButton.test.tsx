import { render, screen, fireEvent } from "@testing-library/react";
import LoginButton from "@/components/LoginButton";

const mockToggle = jest.fn();
let mockValues = {};

jest.mock("../src/lib/store", () => ({
  __esModule: true,
  default: jest.fn(),
}));

beforeEach(() => {
  require("../src/lib/store").default.mockImplementation(() => mockValues);
});

describe("LoginButton", () => {
  it("Says 'Login' when not logged in", () => {
    mockValues = { isLoggedIn: false };
    render(<LoginButton />);
    const button = screen.getByTestId("loginButton");
    expect(button).toHaveTextContent("Login");
  });

  it("Says 'Logout' when logged in", () => {
    mockValues = { isLoggedIn: true };
    render(<LoginButton />);
    const button = screen.getByTestId("loginButton");
    expect(button).toHaveTextContent("Logout");
  });

  it("calls toggleLogin when clicked", () => {
    mockValues = { toggleLogin: mockToggle };
    render(<LoginButton />);
    const button = screen.getByTestId("loginButton");

    fireEvent.click(button);

    expect(mockToggle).toHaveBeenCalled();
  });
});
