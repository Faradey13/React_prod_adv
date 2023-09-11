import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRoutes = () => (
    <Suspense fallback={<div></div>}>
        <Routes>

            {Object.values(routeConfig).map(({element, path}) =>
                <Route
                    element={
                        <div className='page_wrapper'>
                            {element}
                        </div>

                    }
                    path={path}
                    key={path}
                />
            )}
        </Routes>
    </Suspense>
);

export default AppRoutes;