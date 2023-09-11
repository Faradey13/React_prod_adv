import {Decorator} from "@storybook/react";
import {Story} from "@storybook/blocks";
import {BrowserRouter} from "react-router-dom";


export const routerDecorator: Decorator = (Story) => <BrowserRouter><Story/></BrowserRouter>