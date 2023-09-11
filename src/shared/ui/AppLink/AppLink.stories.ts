import type { Meta, StoryObj } from "@storybook/react";
import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";


const meta = {
    title: "shared/AppLink",
    component: AppLink,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args : {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    }
};
export const PrimaryDark: Story = {
    args : {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    },
    decorators : [themeDecorator(Themes.DARK)]
};

export const Secondary: Story = {
    args : {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    }
};
export const SecondaryDark: Story = {
    args : {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    },
    decorators : [themeDecorator(Themes.DARK)]
};

export const Red: Story = {
    args : {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.RED
    }
};
export const RedDark: Story = {
    args : {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.RED
    },
    decorators : [themeDecorator(Themes.DARK)]
};

