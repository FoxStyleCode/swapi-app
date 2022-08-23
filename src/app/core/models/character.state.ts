import { data, CharacterInterface } from '../interfaces/characters.interface';

export interface CharacterState {
    loading   : boolean,
    data      : data
}

export interface CharactersByFilmState{
    characters: CharacterInterface[];
}