import { FilmInterface } from '../interfaces/films.interface';

export interface FilmState {
    loading: boolean,
    films  : FilmInterface[]
}

export interface IndividualFilmState {
    film: FilmInterface
}