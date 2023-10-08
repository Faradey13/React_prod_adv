import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "shared/ui/Input/Input";
import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'test_input',
        value: 'test_value'
    },
};
export const PrimaryDark: Story = {
    args: {
        placeholder: 'test_input',
        value: 'test_value'
    },
};
PrimaryDark.decorators = [themeDecorator(Themes.DARK)]
