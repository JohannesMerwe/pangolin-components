import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Accordion, { AccordionItemProps } from "./index";

import "@testing-library/jest-dom/extend-expect";

describe("Accordion", () => {
    const items: AccordionItemProps[] = [
        {
            id: "1",
            label: "Label 1",
            content: "Content 1",
        },
        {
            id: "2",
            label: "Label 2",
            content: "Content 2",
        },
    ];

    it("should render the Accordion component with items", () => {
        const { getByText } = render(<Accordion items={items} />);
        items.forEach(item => {
            expect(getByText(item.label)).toBeInTheDocument();
        });
    });

    it("should expand/collapse the accordion section when clicked", () => {
        const { getByText } = render(<Accordion items={items} />);
        const accordionButton = getByText(items[0].label);
        fireEvent.click(accordionButton);
        expect(getByText(items[0].content)).toBeInTheDocument();

        fireEvent.click(accordionButton);
        expect(() => getByText(items[0].content)).toThrow();
    });

    it("should have an active state when the accordion section is expanded", () => {
        const { getByText } = render(<Accordion items={items} />);
        const accordionButton = getByText(items[0].label);
        fireEvent.click(accordionButton);

        expect(accordionButton).toHaveStyle("background-color: #e53935;");
        expect(accordionButton).toHaveAttribute("aria-expanded", "true");
    });

    it("should have an inactive state when the accordion section is collapsed", () => {
        const { getByText } = render(<Accordion items={items} />);
        const accordionButton = getByText(items[0].label);

        expect(accordionButton).toHaveStyle("background-color: #e53935");
        expect(accordionButton).toHaveAttribute("aria-expanded", "false");
    });
});
