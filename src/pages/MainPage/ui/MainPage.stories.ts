import type { Meta, StoryObj } from "@storybook/react";
import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";
import MainPage from "pages/MainPage/ui/MainPage";



const meta = {
    title: "pages/MainPage",
    component: MainPage,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};
export const Dark: Story = {
    decorators : [themeDecorator(Themes.DARK)]
};
