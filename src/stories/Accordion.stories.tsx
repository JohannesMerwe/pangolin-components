import { StoryObj, Meta } from "@storybook/react";
import Accordion from "../components/Accordion";

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    args: {
        items: [
            {
                id: "hello",
                label: "Hello World",
                content: "Hey there, world!",
            },
        ],
    },
};

export const MultipleItems: Story = {
    args: {
        items: [
            {
                id: "1",
                label: "Item 1",
                content: "Content 1",
            },
            {
                id: "2",
                label: "Item 2",
                content: "Content 2",
            },
            {
                id: "3",
                label: "Item 3",
                content: "Content 3",
            },
        ],
    },
};

export const NoItems: Story = {
    args: {
        items: [],
    },
};

const meta: Meta = {
    title: "Accordion",
    component: Accordion,
};

export default meta;
