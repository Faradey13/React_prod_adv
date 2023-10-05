
import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/ErrorBoundery";

import {FC} from "react";
import { Counter } from "entities/Counter";




const MainPage:FC = () => {
    const {t} = useTranslation()
    return (
        <div>
            {t('Главная страница')}
            <Counter/>
        </div>
    );
};

export default MainPage;