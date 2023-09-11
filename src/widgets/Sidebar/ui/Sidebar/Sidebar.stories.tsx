import type { Meta, StoryObj } from "@storybook/react";

import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import {decorators} from "@storybook/react/dist/config";


const meta = {
    title: "widget/Sidebar",
    component: Sidebar,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};
export const Dark: Story = {
    decorators : [themeDecorator(Themes.DARK)]
};
