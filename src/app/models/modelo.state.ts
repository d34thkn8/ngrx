import { Modelo } from "./modelo.interface";

export interface ModeloState{
    loading:boolean,
    items:ReadonlyArray<Modelo>
}