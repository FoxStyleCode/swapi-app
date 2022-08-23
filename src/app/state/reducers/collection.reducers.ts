import { createReducer, on } from '@ngrx/store';
import { FilmInterface } from '../../core/interfaces/films.interface';
import { removeFilm } from '../actions/films.actions';
 
export const initialState: ReadonlyArray<string> = [];
 
export const collectionReducer = createReducer(
  initialState,
  on(removeFilm, (state, { filmTitle }) => state.filter((title) => title !== filmTitle)),
);