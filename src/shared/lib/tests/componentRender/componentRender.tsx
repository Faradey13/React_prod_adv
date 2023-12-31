import { Suspense, type ReactNode } from "react";
import {render} from "@testing-library/react";
import i18nConfig from "shared/config/i18n/i18nConfig";
import {I18nextProvider} from "react-i18next";
import {MemoryRouter} from "react-router-dom";
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { DeepPartial } from "@reduxjs/toolkit";

export interface componentRenderOption {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}


export function componentRender(component:ReactNode, options: componentRenderOption = {}) {

    const {
        route = '/',
        initialState,
    } = options

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nConfig}>
                    <Suspense fallback={''}>
                        {component}
                    </Suspense>
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>


    )
}