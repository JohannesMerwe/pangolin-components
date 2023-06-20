import { StoryObj, Meta } from "@storybook/react";
import ButtonOrLink from "./index";

type Story = StoryObj<typeof ButtonOrLink>;

const meta: Meta = {
    title: "Design System/Atoms/ButtonOrLink",
    component: ButtonOrLink,
};

export const Primary: Story = {
    args: {
        children: "Primary Button",
        primary: true,
    },
};

export const Secondary: Story = {
    args: {
        children: "Secondary Button",
        secondary: true,
    },
};

export const Large: Story = {
    args: {
        children: "Large Button",
        large: true,
    },
};

export const Link: Story = {
    args: {
        children: "Link",
        to: "https://www.example.com",
    },
};

export default meta;
