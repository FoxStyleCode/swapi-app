import { Pipe, PipeTransform } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'FilmsPipePipe'
})
export class FilmsPipePipe implements PipeTransform {

  constructor(
   public filmsService: FilmsService,
  ){
  }

  transform(url: string) : Observable<string>{

    return this.filmsService.searchFilm(url).pipe(map(res => { return res.title }));

  }

}
