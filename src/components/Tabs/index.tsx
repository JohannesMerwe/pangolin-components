import React, { useEffect, useRef, useState } from "react";
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

const TabPanel = styled.div`
    ${({ theme }) => css`
        text-align: left;
        border: 1px solid ${theme.colors.positive};
        border-radius: ${theme.spacing.borderRadius.small}px;
        padding: ${theme.spacing.padding.small}px;
    `}
`;

const Tabs: React.FC<TabsProps> = ({ defaultValue, items }) => {
    const tabRef = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState(defaultValue ?? items[0].value);
    const currentIndex = items.findIndex(
        ({ value: itemValue }) => value === itemValue
    );

    // We need to manually update the focus when the value changes
    useEffect(() => {
        if (tabRef.current) {
            const activeTabElement = tabRef.current.querySelector(
                `#tab-${value}`
            ) as HTMLButtonElement | null;
            if (activeTabElement) {
                activeTabElement.focus();
            }
        }
    }, [value]);

    const handleClick = (itemValue: number) => setValue(itemValue);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        event.preventDefault();
        switch (event.code) {
            case "ArrowLeft": {
                const newIndex =
                    (currentIndex - 1 + items.length) % items.length;
                setValue(items[newIndex].value);
                break;
            }
            case "ArrowRight": {
                const newIndex = (currentIndex + 1) % items.length;
                setValue(items[newIndex].value);
                break;
            }
            case "Home": {
                setValue(items[0].value);
                break;
            }
            case "End": {
                setValue(items[items.length - 1].value);
                break;
            }
            default:
                break;
        }
    };

    return (
        <TabsWrapper ref={tabRef}>
            <TabsList role="tablist">
                {items.map(({ label, value: itemValue }) => (
                    <TabsListButton
                        key={itemValue}
                        type="button"
                        role="tab"
                        id={`tab-${itemValue}`}
                        aria-controls={`tabpanel-${itemValue}`}
                        isActive={itemValue === value}
                        tabIndex={itemValue === value ? 0 : -1}
                        aria-selected={itemValue === value}
                        onClick={() => handleClick(itemValue)}
                        onKeyDown={e => handleKeyDown(e)}
                    >
                        {label}
                    </TabsListButton>
                ))}
            </TabsList>
            {items.map(({ panel, value: itemValue }) => (
                <TabPanel
                    key={itemValue}
                    hidden={itemValue !== value}
                    role="tabpanel"
                    id={`tabpanel-${itemValue}`}
                    aria-labelledby={`tab-${itemValue}`}
                    tabIndex={0}
                >
                    {panel}
                </TabPanel>
            ))}
        </TabsWrapper>
    );
};

export default Tabs;
