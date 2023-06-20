import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonOrLink from "./index";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme";

import "@testing-library/jest-dom/extend-expect";

describe("ButtonOrLink", () => {
    const renderWithTheme = (component: React.ReactNode) =>
        render(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>);

    it('renders a button when no "to" prop is provided', () => {
        const { getByRole } = renderWithTheme(
            <ButtonOrLink>Click me</ButtonOrLink>
        );
        const button = getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it('renders a link when the "to" prop is provided', () => {
        const { getByRole } = renderWithTheme(
            <ButtonOrLink to="https://example.com">Click me</ButtonOrLink>
        );
        const link = getByRole("link");
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "https://example.com");
    });

    it("triggers the onClick function when clicked", () => {
        const handleClick = jest.fn();
        const { getByRole } = renderWithTheme(
            <ButtonOrLink onClick={handleClick}>Click me</ButtonOrLink>
        );
        const button = getByRole("button");
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalled();
    });
});
