import React from "react";
import styled, { css } from "styled-components";

type ProgressBarProps = {
    value: number;
    min?: number;
    max?: number;
};

const ProgressOuter = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.tertiary};
        border: 2px solid ${theme.colors.secondary};
        border-radius: ${theme.spacing.borderRadius.default}px;
        height: ${theme.spacing.padding.medium}px;
        overflow: hidden;
    `};
`;

const ProgressInner = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.textInverse};
        height: 100%;
        overflow: hidden;
        text-align: center;
    `};
`;

const ProgressBar: React.FC<ProgressBarProps> = ({
    value,
    min = 0,
    max = 100,
}) => {
    // Handle invalid values and convert them to be within [0, 100].
    const clampedValue = Math.min(Math.max(value, min), max);

    return (
        <ProgressOuter>
            <ProgressInner
                style={{ width: `${clampedValue}%` }}
                role="progressbar"
                aria-valuenow={clampedValue}
                aria-valuemin={min}
                aria-valuemax={max}
            >
                {clampedValue}%
            </ProgressInner>
        </ProgressOuter>
    );
};

export default ProgressBar;
