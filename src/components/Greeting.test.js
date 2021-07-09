import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello Wordl as a Text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button is NOT  clicked", () => {
    render(<Greeting />);

    const outputWorldElement = screen.getByText("It is good to see you", {
      exact: false,
    });
    expect(outputWorldElement).toBeInTheDocument();
  });

  test('render "Changed" if the button was Clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("changed");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was Clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
