import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components";

type TypographyProps = {
    variant:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "p"
        | "sm"
        | "sp"
        | "pre";
    component: string;
    children: React.ReactNode;
};

const styles = {
    h1: (theme: DefaultTheme) => css`
        font-size: ${theme.typography.size.l3}px;
        font-weight: ${theme.typography.weight.black};
    `,
    h2: (theme: DefaultTheme) => css`
        font-size: ${theme.typography.size.l2}px;
        font-weight: ${theme.typography.weight.extrabold};
    `,
    h3: (theme: DefaultTheme) => css`
        font-size: ${theme.typography.size.l1}px;
        font-weight: ${theme.typography.weight.bold};
    `,
    h4: (theme: DefaultTheme) => css`
        font-size: ${theme.typography.size.m3}px;
        font-weight: ${theme.typography.weight.bold};
    `,
    h5: (theme: DefaultTheme) => css`
        font-size: ${theme.typography.size.m2}px;
        font-weight: ${theme.typography.weight.regular};
    `,
    h6: (theme: DefaultTheme) => css`
        font-size: ${theme.typography.size.m1}px;
        font-weight: ${theme.typography.weight.regular};
    `,
    p: (theme: DefaultTheme) => css`
        font-size: ${theme.typography.size.s3}px;
        font-weight: ${theme.typography.weight.regular};
    `,
    sm: (theme: DefaultTheme) => css`
        font-size: ${theme.typography.size.s2}px;
        font-weight: ${theme.typography.weight.regular};
    `,
    sp: (theme: DefaultTheme) => css`
        font-size: ${theme.typography.size.s1}px;
        font-weight: ${theme.typography.weight.regular};
    `,
    pre: (theme: DefaultTheme) => css`
        font-size: ${theme.typography.size.s1}px;
        font-weight: ${theme.typography.weight.regular};
        font-family: ${theme.typography.type.code};
        background-color: ${theme.colors.backgroundInverse};
        padding: ${theme.spacing.padding.small}px;
        border-radius: ${theme.spacing.borderRadius.default}px;
    `,
};

const Typography = styled.div.attrs<TypographyProps>(({ component }) => ({
    as: component,
}))<TypographyProps>`
    color: ${({ theme }) => theme.colors.text};
    ${({ variant, theme }) => styles[variant](theme)}
`;

export default Typography;
