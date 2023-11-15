import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import {User, userActions} from "entities/User";
import {StateSchema} from "app/providers/StoreProvider";
import i18next from 'i18next'
import {LOCAL_STORAGE_THEME_KEY} from "app/providers/ThemeProvider/lib/ThemeContext";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localStorage";

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, {rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if(!response.data) {
                throw new Error()
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        }
        catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(i18next.t('Логин или пароль неверные'))
        }
    }
)
