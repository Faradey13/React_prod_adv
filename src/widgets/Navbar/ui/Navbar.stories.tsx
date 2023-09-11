import type { Meta, StoryObj } from "@storybook/react";

import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import {decorators} from "@storybook/react/dist/config";
import {Navbar} from "widgets/Navbar";


const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    decorators : [themeDecorator(Themes.DARK)]
};
