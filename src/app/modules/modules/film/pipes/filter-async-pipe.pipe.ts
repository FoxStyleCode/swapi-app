import { Pipe, PipeTransform } from '@angular/core';
import { CharacterInterface } from '../../../../core/interfaces/characters.interface';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilmsService } from '../services/films.service';

@Pipe({
  name: 'filterAsyncPipe'
})
export class FilterAsyncPipePipe implements PipeTransform {

  constructor(
    private filmService: FilmsService
  ){}

  transform(characters: Observable<CharacterInterface[]>, search: string): Observable<CharacterInterface[]> {
    
    return this.filmService.searchCharacter(search).pipe(map(res => { return res.results }));

  }

}
