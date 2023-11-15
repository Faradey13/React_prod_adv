import type { Meta, StoryObj } from "@storybook/react";
import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";
import {Text, TextTheme} from "shared/ui/Text/Text";

const meta = {
    title: "shared/Text",
    component: Text,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'title lorem body',
        text: 'text font black input'
    },
};
export const OnlyTitle: Story = {
    args: {
        title: 'title lorem body',

    },
};
export const OnlyText: Story = {
    args: {
        text: 'text font black input'

    },
};
export const PrimaryDark: Story = {
    args: {
        title: 'title lorem body',
        text: 'text font black input'
    },
};
export const OnlyTitleDark: Story = {
    args: {
        title: 'title lorem body',

    },
};
export const OnlyTextDark: Story = {
    args: {
        text: 'text font black input'

    },
};
PrimaryDark.decorators = [themeDecorator(Themes.DARK)]
OnlyTitleDark.decorators = [themeDecorator(Themes.DARK)]
OnlyTextDark.decorators = [themeDecorator(Themes.DARK)]

export const PrimaryRed: Story = {
    args: {
        title: 'title lorem body',
        text: 'text font black input',
        theme: TextTheme.Error
    },
};
export const OnlyTitleRed: Story = {
    args: {
        title: 'title lorem body',
        theme: TextTheme.Error

    },
};
export const OnlyTextRed: Story = {
    args: {
        text: 'text font black input',
        theme: TextTheme.Error

    },
};