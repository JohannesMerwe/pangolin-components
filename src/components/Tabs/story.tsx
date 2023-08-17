import { StoryObj, Meta } from "@storybook/react";
import Tabs from "./index";

type Story = StoryObj<typeof Tabs>;

const meta: Meta = {
    title: "Design System/Atoms/Tabs",
    component: Tabs,
};

export const Default: Story = {
    args: {
        defaultValue: 1,
        items: [
            { value: 1, label: "Tab 1", panel: "This is the first panel" },
            { value: 2, label: "Tab 2", panel: "This is the second panel" },
            { value: 3, label: "Tab 3", panel: "This is the third panel" },
        ],
    },
};
export default meta;
