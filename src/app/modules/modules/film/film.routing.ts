import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ModulesComponent } from '../modules.component';
import { FilmsComponent } from './pages/films/films.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { FilmCharactersComponent } from './pages/film-characters/film-characters.component';


const routes: Routes = [
  { 
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: '',
        component: FilmsComponent
      },
      {
        path: 'characters',
        component: CharactersComponent
      },
      {
        path: 'film-characters/:title',
        component: FilmCharactersComponent      
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class FilmsRoutes{};
