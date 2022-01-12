import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ExemplosRoutingModule } from './exemplos-routing.module';
import { PipesComponent } from './pipes/pipes.component';



@NgModule({
  declarations: [
    DataBindingComponent,
    DiretivasComponent,
    PipesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExemplosRoutingModule,
  ],
  exports: [
    DataBindingComponent
  ]
})
export class ExemplosModule { }
