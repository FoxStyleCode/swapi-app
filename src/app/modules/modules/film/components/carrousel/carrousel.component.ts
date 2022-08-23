import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilmInterface } from '../../../../../core/interfaces/films.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectFilmsFeature } from '../../../../../state/selectors/films.selectors';
import { AppState } from '../../../../../state/app.state';
import { loadedIndividualFilm } from '../../../../../state/actions/films.actions';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  @ViewChild('widgetsContent') widgetsContent!: ElementRef;

  films: Observable<FilmInterface[]> = new Observable();

  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
    this.films = this.store.select(selectFilmsFeature);
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

  selectFilm( object: FilmInterface ){
    this.store.dispatch(loadedIndividualFilm({ film: object }));
  }

}
