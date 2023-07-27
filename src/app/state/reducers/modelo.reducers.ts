import { createReducer, on } from "@ngrx/store";
import { Modelo } from "src/app/models/modelo.interface";
import { loadModelos } from "../actions/modelo.actions";
import { ModeloState } from "src/app/models/modelo.state";
export const initialState:
ModeloState={
    loading:false,
    items:[]
};

export const modelosReducer=createReducer(
    initialState,
    on(loadModelos,(state)=>{
        return{
            ...state, loading:true
        };
    })
)