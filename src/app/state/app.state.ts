import { ActionReducerMap } from '@ngrx/store';

//TODO -> FilmsState
import { FilmState, IndividualFilmState } from '../core/models/films.state';
import { filmsReducer, individualFilmReducer } from './reducers/films.reducers';

//TODO -> CharacterState
import { CharacterState  } from '../core/models/character.state';
import { characterReducer } from './reducers/characters.reducers';



export interface AppState {
    films: FilmState,
    film : IndividualFilmState,
    data : CharacterState,
} 

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    films: filmsReducer,
    film : individualFilmReducer,
    data : characterReducer,
}