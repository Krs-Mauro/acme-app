import { render, screen, fireEvent } from "@testing-library/react";
import Card from "@/components/Card";
import { mockItem } from "@/lib/testingConstants";

const mockRemoveItem = jest.fn();

jest.mock("../src/lib/store", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    removeItem: mockRemoveItem,
  })),
}));

describe("Card", () => {
  it("renders item data", () => {
    render(<Card item={mockItem} index={0} />);

    const nameHeading = screen.getByRole("heading", { name: "Test Item" });
    const ownerHeading = screen.getByRole("heading", { name: "John Doe" });
    const description = screen.getByText("Test description");
    const email = screen.getByText("john@email.com");

    expect(nameHeading).toHaveTextContent("Test Item");
    expect(ownerHeading).toHaveTextContent("John Doe");
    expect(description).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it("calls removeItem on delete button click", () => {
    render(<Card item={mockItem} index={0} />);

    const button = screen.getByRole("button", { name: "Delete" });

    fireEvent.click(button);
    expect(mockRemoveItem).toHaveBeenCalled();
  });
});
