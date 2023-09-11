import {Decorator, StoryFn} from "@storybook/react";
import {Themes} from "app/providers/ThemeProvider";
import {Story} from "@storybook/blocks";


// eslint-disable-next-line react/display-name
export const themeDecorator = (themes: Themes) => (Story: StoryFn) => (
    <div className={`app ${themes}`}>
        <Story />
    </div>
);