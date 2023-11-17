import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import {
    useAppDispatch,
    useAppSelector,
} from "app/providers/StoreProvider/config/store";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider/config/StateSchema";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginIsLoading} from "../../model/selectors/getLoginisLoading/getLoginisLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo( ({className}: LoginFormProps) => {
    const dispatch = useAppDispatch()
    const store = useStore() as ReduxStoreWithManager

    const username = useAppSelector(getLoginUsername)
    const password = useAppSelector(getLoginPassword)
    const isLoading = useAppSelector(getLoginIsLoading)
    const error = useAppSelector(getLoginError)

    const onChangeUsername = useCallback((value: string) => {
        dispatch((loginActions.setUsername(value)))
    },[dispatch])

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value))
    },[dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ password, username }));
    },[dispatch, username, password])


    const {t} = useTranslation()
    return (
        <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers} name={"loginForm"}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text className={cls.titleForm} title={t('Форма авторизациии')}/>
                {error && <Text text={error} theme={TextTheme.Error}/>}
                <Input
                    autofocus
                    placeholder={t('Введите логин')}
                    type="text"
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    placeholder={t('Введите пароль')}
                    type="text"
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={cls.loginBtn}
                    theme={ButtonTheme.OUTLINED}
                    onClick = {onLoginClick}
                    disabled = {isLoading}
                >
                    {t("Войти")}
                </Button>

            </div>
        </DynamicModuleLoader>

    );
});
export default LoginForm
