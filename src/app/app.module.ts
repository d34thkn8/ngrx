import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { modelosReducer } from './state/reducers/modelo.reducers';
import { ROOT_REDUCERS } from './state/app.state';
import { ItemComponent } from './components/item/item.component';
import { EffectsModule } from '@ngrx/effects';
import { ModelosEffects } from './state/effects/modelos.effects';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS, {}),
    StoreDevtoolsModule.instrument({ name:'Prueba' , maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ModelosEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
