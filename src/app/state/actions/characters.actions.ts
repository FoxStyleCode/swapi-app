import { createAction, props } from '@ngrx/store';
import { data, CharacterInterface } from '../../core/interfaces/characters.interface';

export const loadCharacters = createAction(
    '[Characters List] Load Characters',
    props<{ parameters: string }>()
);

export const loadedCharacters = createAction(
    '[Characters List] Loaded Characters',
    props<{ data: data }>()
);

export const loadCharactersByFilm = createAction(
    '[Characters List by Film] Loaded Characters By Film',
    props<{ characters: CharacterInterface[] }>()
);