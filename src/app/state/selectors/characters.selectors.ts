import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CharacterState, CharactersByFilmState } from '../../core/models/character.state';

//TODO -> this property is used to access the list of characters in the store
export const selectCharacterFeature = (state : AppState) => state.data;


//TODO this selector is used to access the loading property of the list of characters in the state
export const selectCharactersLoadingFeature = createSelector(
    selectCharacterFeature,
    (state: CharacterState) => state.loading
);

//TODO this selector is used to access the array list of characters in the state
export const selectCharacterListFeature = createSelector(
    selectCharacterFeature,
    (state: CharacterState) => state.data.results
);

//TODO this selector is used to access the count property in the state
export const selectCharacterCountFeature = createSelector(
    selectCharacterFeature,
    (state: CharacterState) => state.data.count
);

//TODO this selector is used to access the next property in the state
export const selectCharacterNextFeature = createSelector(
    selectCharacterFeature,
    (state: CharacterState) => state.data.next
);

//TODO this selector is used to access the previous property in the state
export const selectCharacterPreviousFeature = createSelector(
    selectCharacterFeature,
    (state: CharacterState) => state.data.previous
);



