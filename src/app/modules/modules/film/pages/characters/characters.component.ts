import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from '../../../../../core/interfaces/characters.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCharactersLoadingFeature, selectCharacterListFeature, selectCharacterNextFeature, selectCharacterPreviousFeature, selectCharacterCountFeature } from '../../../../../state/selectors/characters.selectors';
import { loadCharacters } from '../../../../../state/actions/characters.actions';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  //TODO -> loading and characters
  loading$ : Observable<boolean> = new Observable();  
  characters: Observable<CharacterInterface[]> = new Observable();

  //TODO -> paginate
  next$ : string = '';
  previous$ : string = '';
  count$ : number = 0;

  //TODO numbers of pages
  pages: number[] = [];

  searchText: string = "";

  constructor(
    private store:Store<any>
  ) { }

  ngOnInit() {

    this.loading$ = this.store.select(selectCharactersLoadingFeature);

    this.store.dispatch(loadCharacters({ parameters: 'https://swapi.dev/api/people' }));

    //TODO -> obtain all characters
    this.characters = this.store.select(selectCharacterListFeature);

    //TODO -> obtain pages next and previous
    this.store.select(selectCharacterNextFeature).subscribe(resp =>  this.next$ = resp );
    this.store.select(selectCharacterPreviousFeature).subscribe(resp =>  this.previous$ = resp );
    
    this.obtainPages();

  }

  obtainPages(): void {
    //TODO load pages numbers
    this.store.select(selectCharacterCountFeature).subscribe(resp => {

      this.count$ = resp / 10 + 1

      for (let index = 1; index < this.count$; index++) {

        this.pages.push(index);

    }});
  }

  next( nextPage: string ){
    this.store.dispatch(loadCharacters({ parameters: nextPage }));
  }

  previous(previousPage: string){
    this.store.dispatch(loadCharacters({ parameters: previousPage }));
  }

}
