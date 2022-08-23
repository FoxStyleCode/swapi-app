import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'; //TODO importar el Store de ngrx store
import { loadFilms, loadedIndividualFilm } from '../../../../../state/actions/films.actions';

//TODO -> imports
import { Observable } from 'rxjs';
import { selectLoadingFeature, selectIndividualFilmsFeature, selectFilmsFeature } from '../../../../../state/selectors/films.selectors';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  loading$ : Observable<boolean> = new Observable();  

  film: Observable<any> = new Observable();

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {

    this.loading$ = this.store.select(selectLoadingFeature);
    
    this.store.dispatch(loadFilms());
 
    this.store.select(selectFilmsFeature).subscribe(resp => this.store.dispatch(loadedIndividualFilm({ film: resp[0] })));

    this.film = this.store.select(selectIndividualFilmsFeature);
    
  }

}
