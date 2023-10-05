import {fireEvent, screen} from "@testing-library/react";
import {withTranslation} from "react-i18next";

import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import {Sidebar} from "./Sidebar";


describe('sidebar', ()=> {
    test('existence', () => {

        const SidebarWithTranslation = withTranslation()(Sidebar)
        componentRender(<SidebarWithTranslation />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('toggle button', () => {

        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        const toggleBtn = screen.getByTestId('toggle-sidebar');
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})