import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { ExerciciosUmComponent } from './exercicios-um/exercicios-um.component';
import { PacientesComponent } from './pacientes/pacientes.component';



@NgModule({
  declarations: [
    ExerciciosUmComponent,
    ExercicioDoisComponent,
    PacientesComponent
  ],
  imports: [
    CommonModule,
    ExerciciosRoutingModule,
  ],
  exports: [
    ExerciciosUmComponent,
    ExercicioDoisComponent
  ]
})
export class ExerciciosModule { }
