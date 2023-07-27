import { Modelo } from './../../models/modelo.interface';
import { createAction,props } from "@ngrx/store";

export const loadModelos=createAction(
    '[Lista Modelo] Cargar Modelos'
)
export const loadedModelos = createAction(
    '[Lista Modelo] Cargados de manera correcta',
    props<{ item:Modelo[] }>()
)