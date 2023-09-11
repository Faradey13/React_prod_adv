import type { Meta, StoryObj } from "@storybook/react";
import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";
import {PageLoader} from "widgets/PageLoader";


const meta = {
    title: "widget/PageLoader",
    component: PageLoader,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};
export const Dark: Story = {
    decorators : [themeDecorator(Themes.DARK)]
};
