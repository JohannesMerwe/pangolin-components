import React from "react";
import { render } from "@testing-library/react";
import Typography from "./index";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme";

import "@testing-library/jest-dom/extend-expect";

describe("Typography", () => {
    const renderWithTheme = (component: React.ReactNode) =>
        render(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>);

    it('renders "h1" typography correctly', () => {
        const { getByText } = renderWithTheme(
            <Typography variant="h1" component="h1">
                Test h1
            </Typography>
        );
        const h1 = getByText("Test h1");
        expect(h1).toBeInTheDocument();
        expect(h1.tagName).toBe("H1");
    });

    it('renders "h2" typography correctly', () => {
        const { getByText } = renderWithTheme(
            <Typography variant="h2" component="h2">
                Test h2
            </Typography>
        );
        const h2 = getByText("Test h2");
        expect(h2).toBeInTheDocument();
        expect(h2.tagName).toBe("H2");
    });

    // Add similar tests for h3, h4, h5, h6, and p
});
