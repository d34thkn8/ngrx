import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { ModeloService } from "src/app/services/modelo.service";

@Injectable()
export class ModelosEffects{
    loadModelos$ = createEffect(()=> this.actions$.pipe(
        ofType('[Lista Modelo] Cargar Modelos'),
        mergeMap(()=> this.modeloService.obtenerModelos()
        .pipe(
            map(items=>({type:'[Lista Modelo] Cargados de manera correcta', items})),
            catchError(()=>EMPTY)
        ))
    ) )
    constructor(private actions$:Actions,
        private modeloService:ModeloService){}
}