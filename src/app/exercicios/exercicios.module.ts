import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    ExerciciosRoutingModule,
  ],
  exports: [
    ExerciciosUmComponent,
    ExercicioDoisComponent
  ]
})
export class ExerciciosModule { }
