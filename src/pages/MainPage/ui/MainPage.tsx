
import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/ErrorBoundery";

import {FC} from "react";




const MainPage:FC = () => {
    const {t} = useTranslation()
    return (
        <div>

            {t('Главная страница')}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <BugButton/>


        </div>
    );
};

export default MainPage;