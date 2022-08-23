import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { FilmState, IndividualFilmState } from '../../core/models/films.state';
import { FilmInterface } from '../../core/interfaces/films.interface';

 
//TODO -> this selector is used to access store properties
export const selectFeature = (state: AppState) => state.films;

//TODO -> this selector is used to access store properties
export const selectIndividualFeature = (state: AppState) => state.film;
 

//TODO -> this selector is used to access the load property of the store in FilmState
export const selectLoadingFeature = createSelector(
  selectFeature,
  (state: FilmState) => state.loading
);

//TODO -> this selector is used to access the array films property of the store in FilmState 
export const selectFilmsFeature = createSelector(
    selectFeature,
    (state: FilmState) => state.films
);

//TODO -> 
export const selectIndividualFilmsFeature = createSelector(
  selectIndividualFeature,
  (state: IndividualFilmState) => state.film
);


