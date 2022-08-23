import { Component, Input, OnInit } from '@angular/core';
import { FilmInterface } from '../../../../../core/interfaces/films.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() film!: FilmInterface;

  constructor() { }

  ngOnInit(): void {

  }

}
