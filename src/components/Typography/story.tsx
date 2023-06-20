import { StoryObj, Meta } from "@storybook/react";
import Typography from "./index";

type Story = StoryObj<typeof Typography>;

const meta: Meta = {
    title: "Design System/Atoms/Typography",
    component: Typography,
};

export const H1: Story = {
    args: {
        children: "This is a heading 1",
        variant: "h1",
        component: "h1",
    },
};

export const H2: Story = {
    args: {
        children: "This is a heading 2",
        variant: "h2",
        component: "h2",
    },
};

export const H3: Story = {
    args: {
        children: "This is a heading 3",
        variant: "h3",
        component: "h3",
    },
};

export const H4: Story = {
    args: {
        children: "This is a heading 4",
        variant: "h4",
        component: "h4",
    },
};

export const H5: Story = {
    args: {
        children: "This is a heading 5",
        variant: "h5",
        component: "h5",
    },
};

export const H6: Story = {
    args: {
        children: "This is a heading 6",
        variant: "h6",
        component: "h6",
    },
};

export const Paragraph: Story = {
    args: {
        children: "This is a paragraph",
        variant: "p",
        component: "p",
    },
};

export default meta;
