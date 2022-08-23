import { Pipe, PipeTransform } from '@angular/core';
import { CharacterInterface } from '../../../../core/interfaces/characters.interface';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipePipe implements PipeTransform {

  transform(items: CharacterInterface[], gender: string): CharacterInterface[] {

    if (!items) {
      return [];
    }
    if (!gender) {
      return items;
    }

    gender = gender.toLocaleLowerCase().trim();

    return items.filter(it => {
      return it.gender.toLocaleLowerCase() == gender;
    });
  }

}
