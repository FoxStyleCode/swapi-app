import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FilmsService } from '../../modules/modules/film/services/films.service';
 
@Injectable()
export class FilmsEffects {
 
  loadFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Films List] Load Films'),
      mergeMap(() => this.filmsService.getFilms()
        .pipe(
          map(films => ({ type: '[Films List] Loaded Films', films })),
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