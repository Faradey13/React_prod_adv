import {useTranslation} from "react-i18next";
import { FC, useState } from "react";




const MainPage:FC = () => {

    const [value, setValue] = useState('')
    const onChange = (value: string) => {
        setValue(value)
    }
    const {t} = useTranslation()
    return (
        <div>

        </div>
    );
};

export default MainPage;