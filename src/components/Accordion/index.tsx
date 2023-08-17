import React, { useState } from "react";
import styled, { css } from "styled-components";

type SectionProps = {
    value: number;
    title: string;
    contents: string;
};

type AccordionProps = {
    sections: Array<SectionProps>;
};

type AccordionIconProps = {
    isExpanded?: boolean;
};

const AccordionWrapper = styled.div`
    width: 100%;
`;

const AccordionStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    padding: 4px 0;
`;

const AccordionItem = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    padding: 4px 0;
    &:not(:first-child) {
        border-top: 1px solid #eee;
    }
`;

const AccordionItemTitle = styled.button`
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
    font-weight: 500;
    padding: 4px;
    justify-content: space-between;
    text-align: start;
    display: flex;
    &:hover {
        background-color: #eee;
    }
`;

const AccordionIcon = styled.span<AccordionIconProps>`
    ${({ isExpanded }) => css`
        border: solid currentcolor;
        border-width: 0 2px 2px 0;
        display: inline-block;
        height: 8px;
        pointer-events: none;
        transform: ${isExpanded
            ? "translateY(2px) rotate(-135deg)"
            : "translateY(-2px) rotate(45deg)"};
        width: 8px;
    `}
`;

const AccordionItemContents = styled.span`
    font-size: 14px;
    line-height: 1.2em;
    padding: 4px;
`;

const Accordion: React.FC<AccordionProps> = ({ sections }) => {
    const [openSections, setOpenSections] = useState(new Set());

    return (
        <AccordionWrapper>
            <AccordionStyled>
                {sections.map(({ value, title, contents }) => {
                    const isExpanded = openSections.has(value);

                    return (
                        <AccordionItem key={value}>
                            <AccordionItemTitle
                                type="button"
                                onClick={() => {
                                    const newOpenSections = new Set(
                                        openSections
                                    );
                                    newOpenSections.has(value)
                                        ? newOpenSections.delete(value)
                                        : newOpenSections.add(value);
                                    setOpenSections(newOpenSections);
                                }}
                            >
                                {title}
                                <AccordionIcon
                                    isExpanded={isExpanded}
                                    aria-hidden={true}
                                />
                            </AccordionItemTitle>
                            <AccordionItemContents hidden={!isExpanded}>
                                {contents}
                            </AccordionItemContents>
                        </AccordionItem>
                    );
                })}
            </AccordionStyled>
        </AccordionWrapper>
    );
};

export default Accordion;
