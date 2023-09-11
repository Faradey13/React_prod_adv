import {ReactNode} from "react";
import {render} from "@testing-library/react";
import i18nConfig from "shared/config/i18n/i18nConfig";
import {I18nextProvider} from "react-i18next";


export function renderWithTranslation(component:ReactNode) {
    return render(
        <I18nextProvider i18n={i18nConfig}>
            {component}
        </I18nextProvider>
    )
}