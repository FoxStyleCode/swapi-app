export interface FilmInterface {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[];
    url: string;
    created: Date;
    edited: Date;
}

export interface FilmResult {
    count:    number;
    next:     null;
    previous: null;
    results:  FilmInterface[];
}
