import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tabs from "./index";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme";

import "@testing-library/jest-dom/extend-expect";

describe("Tabs", () => {
    const renderWithTheme = (component: React.ReactNode) =>
        render(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>);

    const items = [
        {
            value: 1,
            label: "Tab 1",
            panel: "Panel 1",
        },
        {
            value: 2,
            label: "Tab 2",
            panel: "Panel 2",
        },
        {
            value: 3,
            label: "Tab 3",
            panel: "Panel 3",
        },
    ];

    it("renders tabs with correct labels", () => {
        const { getByText } = renderWithTheme(<Tabs items={items} />);

        items.forEach(({ label }) => {
            const tabElement = getByText(label);
            expect(tabElement).toBeInTheDocument();
        });
    });

    it("displays correct panel when tab is clicked", () => {
        const { getByText } = renderWithTheme(<Tabs items={items} />);

        const tab2 = getByText("Tab 2");
        fireEvent.click(tab2);

        const panel2 = getByText("Panel 2");
        expect(panel2).toBeVisible();

        const panel1 = getByText("Panel 1");
        expect(panel1).not.toBeVisible();
    });
});
