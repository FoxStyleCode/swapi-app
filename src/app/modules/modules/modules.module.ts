import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ ModulesComponent ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule
  ],
})
export class ModulesModule { }
