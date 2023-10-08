import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { useTranslation } from "react-i18next";


import {Button} from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({className}: LoginFormProps) => {

    const {t} = useTranslation()
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                placeholder={t('Введите логин')}
                type="text"
            />
            <Input
                placeholder={t('Введите пароль')}
                type="text"
            />
            <Button className={cls.loginBtn}>
                {t("Войти")}
            </Button>

        </div>
    );
};

