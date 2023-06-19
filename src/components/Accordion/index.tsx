import React, { useState } from "react";
import styled, { css } from "styled-components";

export interface AccordionItemProps {
    id: string;
    label: string;
    content: string;
}

export interface AccordionProps {
    items: AccordionItemProps[];
}

const AccordionContainer = styled.div`
    font-family: ${props =>
        props.theme.typography.type.primary || "Arial, sans-serif"};
    border-radius: 15px;
    overflow: hidden;
`;

const AccordionButton = styled.button<{ active: boolean }>`
    color: ${props => props.theme.colors.text || "#fff"};
    background-color: ${props => props.theme.colors.primary || "#e53935"};
    border: none;
    padding: 12px;
    font-size: 16px;
    text-align: left;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${props =>
            props.theme.colors.background || "#e53935"};
    }

    ${props =>
        props.active &&
        css`
            background-color: ${props =>
                props.theme.colors.secondary || "#e53935"};
        `}
`;

const AccordionIcon = styled.span<{ active: boolean }>`
    border: solid white;
    border-width: 0 2px 2px 0;
    display: block;
    height: 8px;
    pointer-events: none;
    width: 8px;
    margin: 0 15px 0 auto;
    float: right;

    ${props =>
        (props.active &&
            css`
                transform: translateY(2px) rotate(-135deg);
            `) ||
        css`
            transform: translateY(-2px) rotate(45deg);
        `}
`;

const AccordionSection = styled.section<{ active: boolean }>`
    background-color: ${props => props.theme.colors.background || "#fafafa"};
    padding: 12px;
    transition: max-height 0.3s;

    ${props =>
        !props.active &&
        css`
            max-height: 0;
            overflow: hidden;
            padding: 0;
            border: none;
        `}
`;

export default function Accordion({ items }: AccordionProps) {
    const [activeID, setActiveID] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setActiveID(prevID => (prevID === id ? null : id));
    };

    return (
        <AccordionContainer>
            {items.map(({ id, label, content }) => (
                <div key={id}>
                    <AccordionButton
                        type="button"
                        active={activeID === id}
                        onClick={() => toggleAccordion(id)}
                        aria-expanded={activeID === id ? "true" : "false"}
                    >
                        {label}
                        <AccordionIcon
                            active={activeID === id}
                            aria-hidden="true"
                        />
                    </AccordionButton>
                    {activeID === id && (
                        <AccordionSection active={activeID === id}>
                            {content}
                        </AccordionSection>
                    )}
                </div>
            ))}
        </AccordionContainer>
    );
}
