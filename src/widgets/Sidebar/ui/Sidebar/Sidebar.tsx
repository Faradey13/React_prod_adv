import { classNames } from "shared/lib/classNames/classNames";
import React, { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg"
import HomeIcon from "shared/assets/icons/home.svg"
import cls from "./Sidebar.module.scss";

export interface SidebarProps {
  className?: string;
}
export const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    const {t} = useTranslation()
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >

            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                onClick={onToggle}
                data-testid="toggle-sidebar"
                className={cls.collapseBtn}
                square

            >
                {collapsed ? '>' : '<'}
            </Button>


            
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.item}
                    to={RoutePath.main}

                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>

                </AppLink>


                <AppLink to={RoutePath.about}
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
};

