import React, { useState } from "react";
import styled, { css } from "styled-components";

type ItemProps = {
    value: number;
    label: string;
    panel: string;
};

type TabsProps = {
    defaultValue?: number;
    items: Array<ItemProps>;
};

type TabsListButtonProps = {
    isActive: boolean;
};

const TabsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const TabsList = styled.div`
    display: flex;
    gap: 6px;
`;

const TabsListButton = styled.button<TabsListButtonProps>`
    ${({ theme, isActive }) => css`
        background-color: ${isActive ? theme.colors.primary : "none"};
        color: ${isActive ? theme.colors.textInverse : theme.colors.text};
        border: 1px solid #000;
        border-radius: 4px;
        padding: 6px 10px;
        cursor: pointer;
        &:hover {
            background-color: ${isActive ? theme.colors.secondary : "none"};
            border-color: ${theme.colors.secondary};
            color: ${theme.colors.textInverse};
        }
    `}
`;

const Tabs: React.FC<TabsProps> = ({ defaultValue, items }) => {
    const [value, setValue] = useState(defaultValue ?? items[0].value);

    return (
        <TabsWrapper>
            <TabsList>
                {items.map(({ label, value: itemValue }) => (
                    <TabsListButton
                        key={itemValue}
                        type="button"
                        isActive={itemValue === value}
                        onClick={() => {
                            setValue(itemValue);
                        }}
                    >
                        {label}
                    </TabsListButton>
                ))}
            </TabsList>
            <div>
                {items.map(({ panel, value: itemValue }) => (
                    <div key={itemValue} hidden={itemValue !== value}>
                        {panel}
                    </div>
                ))}
            </div>
        </TabsWrapper>
    );
};

export default Tabs;
