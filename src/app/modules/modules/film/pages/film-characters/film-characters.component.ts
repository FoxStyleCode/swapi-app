import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { Observable } from 'rxjs';
import { FilmResult, FilmInterface } from '../../../../../core/interfaces/films.interface';
import { CharacterInterface } from '../../../../../core/interfaces/characters.interface';
import { Store } from '@ngrx/store';
import { selectFilmsFeature } from '../../../../../state/selectors/films.selectors';
import { AppState } from '../../../../../state/app.state';

@Component({
  selector: 'app-film-characters',
  templateUrl: './film-characters.component.html',
  styleUrls: ['./film-characters.component.css']
})
export class FilmCharactersComponent implements OnInit {

  films: Observable<FilmInterface[]> = new Observable();

  searchText: string = "";

  gender: string = "";

  filmSearch: string = "";

  p: number = 1;

  characters: CharacterInterface[] = [];

  constructor(
    private route: ActivatedRoute,
    private filmsService: FilmsService,
    public store:Store<AppState>
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const title = String(routeParams.get('title'));

    this.filmsService.searchFilms(title).subscribe(resp => resp.results[0].characters.map(name => this.filmsService.getCharacter(name).subscribe(character => this.characters.push(character))));

    this.films = this.store.select(selectFilmsFeature);

  }


}
