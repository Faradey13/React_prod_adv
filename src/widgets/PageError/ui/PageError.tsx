/* eslint-disable no-restricted-globals */
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import cls from './PageError.module.scss'

export interface PageErrorProps {
    className? : string;
}
export const PageError = ({className}: PageErrorProps) => {

    const reloadPage = () => {
        location.reload()
    }
    const {t} = useTranslation()
    
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div>
                {t('Что-то произошло, перезагрузите сраницу')}
            </div>
            <Button onClick={reloadPage} className={cls.reload_btn}>{t('Перезагрузить страницу')}</Button>
            <LanguageSwitcher/>
        </div>
    );
};

