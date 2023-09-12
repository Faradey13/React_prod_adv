import React, { Suspense, useState } from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRoutes from "app/providers/routes/ui/AppRoutes";
import {Navbar} from "widgets/Navbar";

import {Sidebar} from "widgets/Sidebar";
import {Modal} from "widgets/Modal/ui/Modal";
import {Button} from "shared/ui/Button/Button";



const App = () => {

    const [isOpen, setIsOpen] = useState(false)

    const {theme} = useTheme()
    return (
        <Suspense fallback=''>
            <div className={classNames('app', {}, [theme])}>
                <Navbar/>
                <Button onClick={() => setIsOpen(true)}>Toggle </Button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque eveniet facilis incidunt molestias nemo officiis, optio qui repellat velit veritatis, voluptates?</Modal>
                <div className='content_page'>
                    <Sidebar/>
                    <AppRoutes/>
                </div>
            </div>
        </Suspense>

    );
};

export default App;