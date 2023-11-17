import {
    AnyAction,
    ReducersMapObject,
    ThunkDispatch,
    configureStore,
} from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {createReducerManager} from "app/providers/StoreProvider/config/reducerManeger";


export function createReduxStore(initialState?:StateSchema){

    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        counter: counterReducer


    }
    const reducerManager = createReducerManager(rootReducer)
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    // @ts-ignore
    store.reducerManager = reducerManager
    return store
}

export type AppStore = ReturnType<typeof createReduxStore>
type RootState = ReturnType<typeof createReduxStore>
type TypedDispatch<T> =  ThunkDispatch<T, any, AnyAction>



export const useAppDispatch = ():TypedDispatch<ToolkitStore<StateSchema, AnyAction>> => useDispatch<TypedDispatch<AppStore>>()
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector

