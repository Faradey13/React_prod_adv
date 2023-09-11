import type { Preview } from "@storybook/react";

import { styleDecorator } from "shared/config/storybook/StyleDecodaror/StyleDecorator";
import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";
import {routerDecorator} from "shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
    decorators: [
        styleDecorator,
        themeDecorator(Themes.LIGHT),
        routerDecorator
    ],
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
