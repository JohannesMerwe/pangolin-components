import { StoryObj, Meta } from "@storybook/react";
import ProgressBar from "./index";

type Story = StoryObj<typeof ProgressBar>;

const meta: Meta = {
    title: "Design System/Atoms/ProgressBar",
    component: ProgressBar,
};

export const NoProgress: Story = {
    args: {
        value: 0,
        min: 0,
        max: 100,
    },
};

export const SomeProgress: Story = {
    args: {
        value: 25,
        min: 0,
        max: 100,
    },
};

export const LotsOfProgress: Story = {
    args: {
        value: 85,
        min: 0,
        max: 100,
    },
};

export const CompleteProgress: Story = {
    args: {
        value: 100,
        min: 0,
        max: 100,
    },
};

export const EdgeCaseNegativeFloat: Story = {
    args: {
        value: -101.1,
        min: 0,
        max: 100,
    },
};

export const EdgeCasePositiveFloat: Story = {
    args: {
        value: 101.1,
        min: 0,
        max: 100,
    },
};

export default meta;
