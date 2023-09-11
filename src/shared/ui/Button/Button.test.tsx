import {render, screen} from "@testing-library/react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";



describe('button test', () =>{
    test('exist test', ()=> {
        // eslint-disable-next-line react/jsx-no-undef,i18next/no-literal-string
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument()
    })
    test('1 param', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ButtonTheme.CLEAR}>test</Button> )
        expect(screen.getByText('test')).toHaveClass('clear')

    })
})
