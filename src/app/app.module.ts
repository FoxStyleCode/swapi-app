import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModulesModule } from './modules/modules/modules.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//imports
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';

//TODO -> list of efects
import { FilmsEffects } from './state/effects/films.effects';
import { CharacterEffects } from './state/effects/characters.effects';

@NgModule({
  declarations: [	
    AppComponent,
    NopagefoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ModulesModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CharacterEffects, FilmsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
