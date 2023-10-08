import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from "./ThemeContext";

export interface useThemResult {
    toggleTheme: () => void;
    theme: Themes
}
export const useTheme = ():useThemResult => {
    const {theme,setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme =  theme=== Themes.LIGHT ? Themes.DARK : Themes.LIGHT
        setTheme(newTheme)
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {toggleTheme, theme}
}