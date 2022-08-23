import { createAction, props } from '@ngrx/store';
import { FilmInterface } from '../../core/interfaces/films.interface';

export const loadFilms = createAction(
    '[Films List] Load Films'
);

export const loadedFilms = createAction(
    '[Films List] Loaded Films',
    props<{ films : FilmInterface[] }>()
);

export const loadedIndividualFilm = createAction(
    '[Individual Film] Loaded individual Film',
    props<{ film : FilmInterface }>()
);
