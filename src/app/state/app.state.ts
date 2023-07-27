import { ActionReducerMap } from "@ngrx/store";
import { Modelo } from "../models/modelo.interface";
import { ModeloState } from "../models/modelo.state";
import { modelosReducer } from "./reducers/modelo.reducers";

export interface AppState{
    items:ModeloState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState>={
    items:modelosReducer
}