import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { FilmsService } from '../../modules/modules/film/services/films.service';
import { loadCharacters } from '../actions/characters.actions';
 
@Injectable()
export class CharacterEffects {
 
  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCharacters),
      switchMap(action => this.filmsService.getCharacters(action.parameters)
        .pipe(
          map(data => ({ type: '[Characters List] Loaded Characters', data })),
          catchError(() => EMPTY)
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private filmsService: FilmsService
  ) {}
}