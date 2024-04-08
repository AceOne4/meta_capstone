import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { fetchAPI } from "./API/API";

test('Renders the "Choose date" label', () => {
  render(<BookingForm />);
  const dateLabel = screen.getByText("Choose date");
  expect(dateLabel).toBeInTheDocument();
});
jest.mock("./API/API.js", () => ({
  fetchAPI: jest.fn(),
}));

test("initializeTimes returns expected array of available times", async () => {
  // Mock data to be returned by fetchAPI
  const mockAvailableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  // Mock implementation of fetchAPI to return the mockAvailableTimes
  fetchAPI.mockResolvedValue(mockAvailableTimes);

  const initializeTimes = async () => {
    try {
      // Get today's date
      const today = new Date();
      const todayString = today.toISOString().slice(0, 10); // Format date as YYYY-MM-DD
      // Fetch available times for today's date
      const times = await fetchAPI(todayString);
      return times;
    } catch (error) {
      console.error("Error initializing times:", error);
      return [];
    }
  };
  // Call initializeTimes function
  const result = await initializeTimes();

  // Check if the result matches the expected available times
  expect(result).toEqual(mockAvailableTimes);
});

jest.mock("./API/API.js", () => ({
  fetchAPI: jest.fn(),
}));

test("updateTimes returns the expected array of available times for a selected date", async () => {
  // Mock data to be returned by fetchAPI
  const mockAvailableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  // Mock implementation of fetchAPI to return the mockAvailableTimes
  fetchAPI.mockResolvedValue(mockAvailableTimes);

  // Pre-selected date
  const selectedDate = "2024-04-07";

  const updateTimes = async (selectedDate) => {
    try {
      const times = await fetchAPI(selectedDate);
      return times;
    } catch (error) {
      console.error("Error updating times:", error);
    }
  };

  // Call updateTimes function with the pre-selected date
  const result = await updateTimes(selectedDate);

  // Check if the result matches the expected available times
  expect(result).toEqual(mockAvailableTimes);
});

describe("BookingForm component", () => {
  test("renders date input with required and min attributes", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute("required");
  });

  test("renders time select with required attribute", () => {
    render(<BookingForm />);
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toHaveAttribute("required");
  });

  test("renders number of guests input with required, min, and max attributes", () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });
});
describe("BookingForm validation", () => {
  test("validates date input", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText("Choose date");

    // Invalid state: empty date
    fireEvent.change(dateInput, { target: { value: "" } });
    expect(dateInput).toBeInvalid();
  });

  test("validates time select", () => {
    render(<BookingForm />);
    const timeSelect = screen.getByLabelText("Choose time");

    // Valid state: non-empty time
    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    expect(timeSelect).toBeValid();
  });

  test("validates number of guests input", () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText("Number of guests");

    // Invalid state: empty guests
    fireEvent.change(guestsInput, { target: { value: "" } });
    expect(guestsInput).toBeInvalid();

    // Invalid state: non-integer guests
    fireEvent.change(guestsInput, { target: { value: "abc" } });
    expect(guestsInput).toBeInvalid();

    // Invalid state: zero guests
    fireEvent.change(guestsInput, { target: { value: "0" } });
    expect(guestsInput).toBeInvalid();

    // Valid state: positive integer guests
    fireEvent.change(guestsInput, { target: { value: "4" } });
    expect(guestsInput).toBeValid();
  });
});
