import {classNames} from "shared/lib/classNames/classNames";
import React, { useCallback, useState } from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Modal} from "widgets/Modal";
import cls from './Navbar.module.scss'


export interface NavbarProps {
    className? : string;
}
export const Navbar = ({className}: NavbarProps) => {

    const[isAuthModal, setIsAuthModal] = useState(false)

    const {t} = useTranslation()

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    },[])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.main_link}
                    to={"/"}
                >
                    <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED}>
                        {t('Войти')}
                    </Button>
                    <Modal
                        isOpen={isAuthModal}
                        onClose={onToggleModal}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, similique?
                    </Modal>
                </AppLink>

            </div>
        </div>
    );
}


export default Navbar