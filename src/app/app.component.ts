import { selectLoading } from './state/selectors/modelo.selectors';
import { loadModelos } from './state/actions/modelo.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'v16-template';
  loading$: Observable<boolean>=new Observable();

  constructor(private store:Store<any>){}

  ngOnInit(): void {
    this.loading$=this.store.select(selectLoading)
    this.store.dispatch(loadModelos());
  }
}
