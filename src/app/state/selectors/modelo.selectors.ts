import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ModeloState } from "src/app/models/modelo.state";

export const selectItemsFeature = (state:AppState)=> state.items;
export const selectLoading=createSelector(
    selectItemsFeature,
    (state:ModeloState)=> state.loading
);

export const selectItems=createSelector(
    selectItemsFeature,
    (state:ModeloState)=> state.items
);