import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  date = new Date();
  nome = 'Sidcley Nascimento';
  percentual = 0.55;
  salario = 3000;
  user = {name: 'sid', id: 1};

  constructor() { }

  ngOnInit(): void {
  }

}
