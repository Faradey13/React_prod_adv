import {Decorator, StoryFn} from "@storybook/react";
import {Themes} from "app/providers/ThemeProvider";
import {Story} from "@storybook/blocks";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";



export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>


);