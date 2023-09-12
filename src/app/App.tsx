import React, { Suspense, useState } from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRoutes from "app/providers/routes/ui/AppRoutes";
import {Navbar} from "widgets/Navbar";

import {Sidebar} from "widgets/Sidebar";




const App = () => {


    const {theme} = useTheme()
    return (
        <Suspense fallback=''>
            <div className={classNames('app', {}, [theme])}>
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