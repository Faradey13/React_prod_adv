import type { Meta, StoryObj } from "@storybook/react";
import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";
import {NotFoundPage} from "pages/NotFoundPage";



const meta = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};
export const Dark: Story = {
    decorators : [themeDecorator(Themes.DARK)]
};
