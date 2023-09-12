import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";
import cls from './Button.module.scss'
import 'app/styles/index.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINED = 'outlined',
    OUTLINED_INVERTED = 'outlinedInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className? : string;
    theme? : ButtonTheme;
    'data-testid'?: string;
    square? : boolean;
    size? : ButtonSize
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        theme,
        square,
        size,
        className,
        onClick,
        children,
        ...otherProps
    } = props

    const mods:Record<string, boolean> = {
        [cls[theme]] : true,
        [cls.square] : square,
        [cls[size]] : true
    }

    return (
        <button
            {...otherProps}
            onClick={onClick}
            className={
                classNames(cls.Button, mods, [className])}
        >
            {children}
        </button>
    );
};

