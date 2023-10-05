import {CounterSchema} from "entities/Counter/model/types/counterSchema";
import {Counter} from "entities/Counter/ui/Counter";
import {counterReducer} from "entities/Counter/model/slice/CounterSlice";



export {
    CounterSchema,
    counterReducer,
    Counter
}