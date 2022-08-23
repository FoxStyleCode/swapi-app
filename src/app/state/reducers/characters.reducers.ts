import { Action, createReducer, on } from '@ngrx/store';

import { CharacterState } from '../../core/models/character.state';
import { loadCharacters, loadedCharacters } from '../actions/characters.actions';


//TODO -> initial state
export const initialState: CharacterState = { loading: false, data: { count: 0, next: '', previous  : '', results   : [] }};


//TODO -> filmsReducer
export const characterReducer = createReducer(
  initialState,
  on(loadCharacters, (state) =>{
    return { ...state, loading: true }
  }),
  on(loadedCharacters, (state, { data } ) => {
      return { ...state, loading: false, data }
  }),
);


