import {classNames} from "shared/lib/classNames/classNames";
import React, { useCallback, useEffect, useState } from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUsername";
import {useAppDispatch, useAppSelector} from "app/providers/StoreProvider/config/store";
import {getUserAuthData, userActions} from "entities/User";
import cls from './Navbar.module.scss'


export interface NavbarProps {
    className? : string;
}
export const Navbar = ({className}: NavbarProps) => {


    const dispatch = useAppDispatch()

    const[isAuthModal, setIsAuthModal] = useState(false)

    const authData = useAppSelector(getUserAuthData)

    const {t} = useTranslation()

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    },[])
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    },[])
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())

    },[dispatch])

    useEffect(() => {
        if (setIsAuthModal && authData) {
            setIsAuthModal(false)
        }
    },[setIsAuthModal, authData])


    if (authData){
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
               
                    <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED}>
                        {t('Выйти')}
                    </Button>
                   
              

                </div>
            </div>
        )
    }

    return (

        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.main_link}
                    to={"/"}
                >
                    <Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERTED}>
                        {t('Войти')}
                    </Button>
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                </AppLink>

            </div>
        </div>
    );
}


export default Navbar