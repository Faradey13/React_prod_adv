import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './NotFoundPage.module.scss'

export interface NotFoundPageProps {
    className? : string;
}
export const NotFoundPage = ({className}: NotFoundPageProps) => {

    const {t, i18n} = useTranslation()

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>

        </div>
    );
};
