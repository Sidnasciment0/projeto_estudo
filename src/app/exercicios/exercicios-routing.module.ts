import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { ExerciciosUmComponent } from './exercicios-um/exercicios-um.component';
import { PacientesComponent } from './pacientes/pacientes.component';

const routes: Route[] = [
  {
    path: 'exercicios-um',
    component: ExerciciosUmComponent,
  },
  {
    path: 'exercicio-dois',
    component: ExercicioDoisComponent,
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciciosRoutingModule {}
