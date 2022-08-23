import { Pipe, PipeTransform } from '@angular/core';
import { CharacterInterface } from '../../../../core/interfaces/characters.interface';

@Pipe({
  name: 'characterByFilmAsyncPipe'
})
export class CharacterByFilmAsyncPipePipe implements PipeTransform {

  transform(items: CharacterInterface[], url : string): CharacterInterface[] {
    
    console.log(url);

    if (!items) {
      return [];
    }
    if (!url) {
      return items;
    }
    
    url = url.toLocaleLowerCase();

    return items.filter(it => {
      return it.films.includes(url);
    });

  }

}
