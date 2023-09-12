import type { Meta, StoryObj } from "@storybook/react";

import { themeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Themes } from "app/providers/ThemeProvider";
import {Button, ButtonSize, ButtonTheme} from "./Button";

const meta = {
    title: "Example/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text'
    },
};
export const PrimaryDark: Story = {
    args: {
        children: 'Text'
    },
};
PrimaryDark.decorators = [themeDecorator(Themes.DARK)]
export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED
    },
};
export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR
    },
};
ClearDark.decorators = [themeDecorator(Themes.DARK)]

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.M
    },
}

export const OutlinedSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.L
    },
};

export const OutlinedSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.XL
    },
};

export const OutlinedInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED_INVERTED,
        size: ButtonSize.M
    },
}

export const OutlinedDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED
    },
};
OutlinedDark.decorators = [themeDecorator(Themes.DARK)]

export const Background: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND
    }
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
}

export const SquareSizeM: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M
    }
};

export const SquareSizeL: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L
    }
};

export const SquareSizeXL: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL
    }
};


