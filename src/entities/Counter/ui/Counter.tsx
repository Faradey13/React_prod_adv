import { useDispatch, useSelector } from "react-redux";
import {Button} from "shared/ui/Button/Button";
import {counterActions} from "entities/Counter/model/slice/CounterSlice";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {getCounter} from "entities/Counter/model/selectors/getCounter/getCounter";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";


export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>

            <h1 data-testid="value-title">{counterValue}</h1>

            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid={'increment-button'} onClick={increment}>increment</Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid={'decrement-button'} onClick={decrement}>decrement</Button>
        </div>
    );
}

