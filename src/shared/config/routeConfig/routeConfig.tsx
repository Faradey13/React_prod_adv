import {RouteProps} from "react-router-dom";
import MainPage from "pages/MainPage/ui/MainPage";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";


export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.ABOUT] : '/about',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ABOUT] : {
        element: <AboutPage/>,
        path: RoutePath.about
    },
    [AppRoutes.MAIN] : {
        element: <MainPage/>,
        path: RoutePath.main
    },
    [AppRoutes.NOT_FOUND] : {
        element: <NotFoundPage/>,
        path: RoutePath.not_found
    }
}