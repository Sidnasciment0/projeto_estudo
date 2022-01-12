import { ExerciciosUmComponent } from './exercicios-um/exercicios-um.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';

const routes: Route[] = [
  {
    path: 'exercicio-um',
    component: ExerciciosUmComponent,
  },
  {
    path: 'exercicio-dois',
    component: ExercicioDoisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciciosRoutingModule {}
