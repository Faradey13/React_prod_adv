import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { useTranslation } from "react-i18next";


import cls from "./Text.module.scss";

export enum TextTheme {
    Primary = 'primary',
    Error = 'error'
}

export interface TextProps {
  className?: string;
  title? : string;
  text? : string;
  theme? : TextTheme
}
export const Text = (props: TextProps) => {
    const {className,
        text,
        title,
        theme = TextTheme.Primary
    } = props

    return (
        <div className={classNames(cls.Text, {[cls[theme]]:true}, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
}
