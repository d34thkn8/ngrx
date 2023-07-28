import { createReducer, on } from "@ngrx/store";
import { loadModelos, loadedModelos } from "../actions/modelo.actions";
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
    }),
    on(loadedModelos,(state, {item})=>{
        return{
            ...state, 
            loading:false, 
            item
        };
    })
)