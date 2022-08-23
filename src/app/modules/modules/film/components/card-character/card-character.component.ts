import { Component, OnInit, Input } from '@angular/core';
import { CharacterInterface } from '../../../../../core/interfaces/characters.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.css']
})
export class CardCharacterComponent implements OnInit {

  @Input() character!: CharacterInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
