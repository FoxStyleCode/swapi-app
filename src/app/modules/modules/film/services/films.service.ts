import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//imports rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// //interface de films
import { FilmInterface, FilmResult } from '../../../../core/interfaces/films.interface';

//environments
import { environment } from '../../../../../environments/environment';
import {  CharacterInterface, data } from '../../../../core/interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private baseURL : string = environment.baseURI;

  constructor(
    public http: HttpClient,
  ) { }


  //TODO Return list of films
  getFilms(): Observable<FilmInterface[]> {
    return this.http.get<FilmInterface[]>(`${this.baseURL}films`)
    .pipe(map( (resp:any) => resp['results']));
  }

  //TODO Return list of Characters
  getCharacters( url: string ): Observable<data> {
    return this.http.get<data>(url)
    .pipe(map( (resp:data) => resp ));
  }

  //TODO -> return a especific film by tittle
  searchFilms(title: string): Observable<FilmResult> {
    return this.http.get<FilmResult>(`${this.baseURL}films?search=${title}`)
    .pipe(map( (resp:FilmResult) => resp));
  }

  //TODO -> return a especific film by tittle
  searchFilm(url: string): Observable<FilmInterface> {
  return this.http.get<FilmInterface>(`${url}`)
  .pipe(map( (resp:FilmInterface) => resp));
}

  //TODO -> return a especific character by url
  getCharacter(url: string): Observable<CharacterInterface> {
    return this.http.get<CharacterInterface>(url)
    .pipe(map( (resp:CharacterInterface) => resp));
  }

  //TODO -> return a especific film by tittle
  searchCharacter(name: string): Observable<data> {
    return this.http.get<data>(`${this.baseURL}people?search=${name}`)
    .pipe(map( (resp:data) => resp));
  }

}
