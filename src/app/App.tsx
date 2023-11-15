import React, { Suspense, useEffect } from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRoutes from "app/providers/routes/ui/AppRoutes";
import {Navbar} from "widgets/Navbar";

import {Sidebar} from "widgets/Sidebar";
import {useAppDispatch} from "app/providers/StoreProvider/config/store";
import {userActions} from "entities/User";




const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(userActions.initAuthData())
    },[dispatch])

    const {theme} = useTheme()
    return (
        <Suspense fallback=''>
            <div className={classNames('app', {}, [])}>
                <Navbar/>
                <div className='content_page'>
                    <Sidebar/>
                    <AppRoutes/>
                </div>
            </div>
        </Suspense>

    );
};

export default App;