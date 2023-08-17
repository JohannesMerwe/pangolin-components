import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Accordion from "./index";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme";

import "@testing-library/jest-dom/extend-expect";

describe("Accordion Component", () => {
    const renderWithTheme = (component: React.ReactNode) =>
        render(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>);

    const sections = [
        {
            value: 1,
            title: "Section 1",
            contents: "Contents of section 1",
        },
        {
            value: 2,
            title: "Section 2",
            contents: "Contents of section 2",
        },
    ];

    test("renders sections with titles and contents", () => {
        const { getByText } = renderWithTheme(
            <Accordion sections={sections} />
        );

        sections.forEach(({ title, contents }) => {
            const titleElement = getByText(title);
            const contentsElement = getByText(contents);

            expect(titleElement).toBeInTheDocument();
            expect(contentsElement).toBeInTheDocument();
        });
    });

    test("expands and collapses sections on click", () => {
        const { getByText } = renderWithTheme(
            <Accordion sections={sections} />
        );

        const section1Title = getByText("Section 1");
        const section2Title = getByText("Section 2");

        fireEvent.click(section1Title);
        expect(getByText("Contents of section 1")).toBeVisible();

        fireEvent.click(section2Title);
        expect(getByText("Contents of section 2")).toBeVisible();
    });
});
