import { StoryObj, Meta } from "@storybook/react";
import Accordion from "./index";

type Story = StoryObj<typeof Accordion>;

const meta: Meta = {
    title: "Design System/Molecules/Accordion",
    component: Accordion,
};

export const Default: Story = {
    args: {
        sections: [
            { value: 1, title: "Title 1", contents: "Content 1" },
            { value: 2, title: "Title 2", contents: "Content 2" },
            { value: 3, title: "Title 3", contents: "Content 3" },
        ],
    },
};

export default meta;
