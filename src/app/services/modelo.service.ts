import { Observable, delay, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Modelo } from '../models/modelo.interface';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor() { }
  obtenerModelos():Observable<Modelo[]>{
    const data=[
      {
        name:'numero 1',
        id:1
      },
      {
        name:'numero 2',
        id:2
      },
    ];
    return of(data).pipe(
      delay(1500)
    );

  }
}
