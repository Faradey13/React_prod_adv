import {classNames} from "shared/lib/classNames/classNames";
import {Themes, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ButtonTheme} from "shared/ui/Button/Button";


export interface ThemeSwitcherProps {
    className? : string;
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {toggleTheme, theme} = useTheme()

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Themes.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );
};

