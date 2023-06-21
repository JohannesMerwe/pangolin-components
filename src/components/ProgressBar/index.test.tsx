import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from "./index";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme";

import "@testing-library/jest-dom/extend-expect";

describe("ProgressBar", () => {
    const renderWithTheme = (component: React.ReactNode) =>
        render(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>);

    it('renders "ProgressBar" with value correctly', () => {
        const { getByRole } = renderWithTheme(<ProgressBar value={50} />);
        const progressbar = getByRole("progressbar");
        expect(progressbar).toBeInTheDocument();
        expect(progressbar.getAttribute("aria-valuenow")).toBe("50");
    });

    it('renders "ProgressBar" with min and max values correctly', () => {
        const { getByRole } = renderWithTheme(
            <ProgressBar value={50} min={0} max={200} />
        );
        const progressbar = getByRole("progressbar");
        expect(progressbar).toBeInTheDocument();
        expect(progressbar.getAttribute("aria-valuenow")).toBe("50");
        expect(progressbar.getAttribute("aria-valuemin")).toBe("0");
        expect(progressbar.getAttribute("aria-valuemax")).toBe("200");
    });

    it('clamps "ProgressBar" value correctly', () => {
        const { getByRole } = renderWithTheme(
            <ProgressBar value={250} min={0} max={200} />
        );
        const progressbar = getByRole("progressbar");
        expect(progressbar).toBeInTheDocument();
        expect(progressbar.getAttribute("aria-valuenow")).toBe("200");
    });
});
