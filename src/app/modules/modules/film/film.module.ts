import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CharactersComponent } from './pages/characters/characters.component';
import { FilmsComponent } from './pages/films/films.component';
import { FilmsRoutes } from './film.routing';
import { CardComponent } from './components/card/card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { FilmCharactersComponent } from './pages/film-characters/film-characters.component';
import { FilmsPipePipe } from './pipes/films-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { GenderPipePipe } from './pipes/gender-pipe.pipe';

import { NgxPaginationModule } from 'ngx-pagination';
import { FilterAsyncPipePipe } from './pipes/filter-async-pipe.pipe';
import { CharacterByFilmAsyncPipePipe } from './pipes/character-by-film-async-pipe.pipe';


@NgModule({
  declarations: [
    CharactersComponent,
    FilmsComponent,
    CardComponent,
    CarrouselComponent,
    CardCharacterComponent,
    FilmCharactersComponent,
    FilmsPipePipe,
    FilterPipePipe,
    GenderPipePipe,
    FilterAsyncPipePipe,
    CharacterByFilmAsyncPipePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FilmsRoutes,
    FormsModule,
    NgxPaginationModule
  ],
})
export class FilmModule { }
