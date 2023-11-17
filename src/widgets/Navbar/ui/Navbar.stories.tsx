import type { Meta, StoryObj } from "@storybook/react";
import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Navbar> = {
    title: "widget/Navbar",
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
};
export const LightNoAuth: Story = {
};
export const Dark: Story = {
};
export const DarkNoAuth: Story = {
};

Light.decorators = [StoreDecorator({user: {authData: {username:'bob'}}})]
Dark.decorators = [StoreDecorator({user: {authData: {username:'bob'}}}), themeDecorator(Themes.DARK)]
LightNoAuth.decorators = [StoreDecorator({user:{}})]
DarkNoAuth.decorators = [StoreDecorator({user:{}}), themeDecorator(Themes.DARK)]