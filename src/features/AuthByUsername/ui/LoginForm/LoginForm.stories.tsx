import type { Meta, StoryObj } from "@storybook/react";
import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import  LoginForm  from "../LoginForm/LoginForm";

const meta = {
    title: "features/LoginForm",
    component: LoginForm,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};
export const PrimaryDark: Story = {

};
export const PrimaryError: Story = {

};
export const PrimaryDarkError: Story = {

};


Primary.decorators = [StoreDecorator({loginForm: {
    username: 'sdfsdfsdf', password: 'sdfsdf' }
})]
PrimaryError.decorators = [StoreDecorator({loginForm: {
    username: 'sdfsdfsdf', password: 'sdfsdf', error: 'error' }
})]
PrimaryDark.decorators = [themeDecorator(Themes.DARK),StoreDecorator({loginForm: {
    username: 'sdfsdfsdf', password: 'sdfsdf' }
})]
PrimaryDarkError.decorators = [themeDecorator(Themes.DARK),StoreDecorator({loginForm: {
    username: 'sdfsdfsdf', password: 'sdfsdf', error: 'error' }
})]