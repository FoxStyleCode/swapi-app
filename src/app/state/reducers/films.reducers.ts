import { createReducer, on } from '@ngrx/store';

import { FilmState, IndividualFilmState } from '../../core/models/films.state';
import { loadedFilms, loadFilms, loadedIndividualFilm } from '../actions/films.actions';
import { FilmInterface } from '../../core/interfaces/films.interface';

//TODO -> initial state
export const initialState: FilmState = { loading: false, films: [] };

//TODO const obtain one movie
export const initialIndividualFilmState : IndividualFilmState = { film: { 
  title: '',
  episode_id: 0,
  opening_crawl: '',
  director: '',
  producer: '',
  release_date: new Date(),
  species: [],
  starships: [],
  vehicles: [],
  characters: [],
  planets: [],
  url: '',
  created: new Date(),
  edited: new Date() 
}}


//TODO -> filmsReducer
export const filmsReducer = createReducer(
  initialState,
  on(loadFilms, (state) =>{
    return { ...state, loading: true }
  }),
  on(loadedFilms, (state, { films }) => {
      return { ...state, loading: false, films }
  }),
);

//TODO -> oneReducer
export const individualFilmReducer = createReducer(
  initialIndividualFilmState,
  on(loadedIndividualFilm, (state, { film }) => {
    return { ...state, film }
  })
);
