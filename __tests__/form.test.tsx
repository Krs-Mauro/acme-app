import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormPage from "@/app/form/page";

const mockAddItem = jest.fn();
const mockPush = jest.fn();

jest.mock("../src/lib/store", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    isLoggedIn: true,
    addItem: mockAddItem,
  })),
}));
jest.mock("next/navigation", () => ({
  __esModule: true,
  useRouter: () => ({ push: mockPush }),
}));

describe("FormPage", () => {
  it("renders the form", () => {
    render(<FormPage />);

    expect(screen.getByText("Create your request here:")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Owner")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("calls addItem and navigates on submit", async () => {
    render(<FormPage />);

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Test Name" },
    });
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Test Description" },
    });
    fireEvent.change(screen.getByPlaceholderText("Owner"), {
      target: { value: "Test Owner" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "email@email.com" },
    });

    fireEvent.submit(screen.getByText("Submit"));

    await waitFor(() => {
      expect(mockAddItem).toHaveBeenCalled();
      expect(mockPush).toHaveBeenCalled();
    });
  });
});
