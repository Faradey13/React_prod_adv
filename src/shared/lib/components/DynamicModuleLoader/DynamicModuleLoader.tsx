
import React, { FC, ReactNode, useEffect } from "react";
import {useAppDispatch} from "app/providers/StoreProvider/config/store";
import {ReduxStoreWithManager,  StateSchemaKey} from "app/providers/StoreProvider";
import { useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
    [name in StateSchemaKey]? : Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export interface DynamicModuleLoaderProps {
  children: ReactNode;
    // eslint-disable-next-line no-restricted-globals
  name: StateSchemaKey;
  reducers: ReducersList;
  removeAfterUnmount?: boolean
}



export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {

    const {children,
        name,
        reducers,
        removeAfterUnmount
    } = props

    const dispatch = useAppDispatch()
    const store = useStore() as ReduxStoreWithManager
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]:ReducersListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({type: `@INIT ${name} reducer`})

        })
        return () => {
            if (removeAfterUnmount) {
                store.reducerManager.remove(name)
                dispatch({type: `@DESTROY ${name} reducer`})
            }
        }


        // eslint-disable-next-line
    },[])

    return (
        <>
            {children}
        </>
    );
};

