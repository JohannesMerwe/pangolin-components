import React from "react";
import styled, { css } from "styled-components";

type ButtonOrLinkProps = {
    to?: string;
    primary?: boolean;
    secondary?: boolean;
    large?: boolean;
    onClick?: () => void;
    children: string;
};

const StyledButton = styled.button<ButtonOrLinkProps>`
    ${({ theme, primary, secondary, large }) => css`
        display: inline-block;
        padding: ${theme.spacing.padding.medium}px;
        border-radius: ${theme.spacing.borderRadius.default}px;
        font-family: ${theme.typography.type.primary};
        font-weight: ${theme.typography.weight.bold};
        font-size: ${large
            ? theme.typography.size.m1
            : theme.typography.size.s3}px;
        color: ${theme.colors.text};
        background-color: ${primary
            ? theme.colors.primary
            : secondary
            ? theme.colors.secondary
            : theme.colors.tertiary};
        border: none;
        cursor: pointer;
        text-decoration: none;
        transition: background-color 0.3s;

        &:hover {
            background-color: ${primary
                ? theme.colors.secondary
                : secondary
                ? theme.colors.primary
                : theme.colors.background};
        }
    `}
`;

const ButtonOrLink: React.FC<ButtonOrLinkProps> = ({ to, ...props }) => {
    if (to) {
        // Render a link
        return <StyledButton as="a" href={to} {...props} />;
    }

    // Render a button
    return <StyledButton {...props} />;
};

export default ButtonOrLink;
