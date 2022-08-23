import { Pipe, PipeTransform } from '@angular/core';
import { CharacterInterface } from '../../../../core/interfaces/characters.interface';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: CharacterInterface[], searchText: string): CharacterInterface[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.eye_color.toLocaleLowerCase().includes(searchText);
    });

  }

}
