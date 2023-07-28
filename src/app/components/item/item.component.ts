import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Modelo } from 'src/app/models/modelo.interface';
import { AppState } from 'src/app/state/app.state';
import { selectItems } from 'src/app/state/selectors/modelo.selectors';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items$:Observable<Modelo[]>=new Observable();

  constructor(private store:Store<AppState>){

  }
  ngOnInit(): void {
    //@ts-ignore
    this.items$=this.store.select(selectItems);
    console.log('asignados!')
  }
  
}
