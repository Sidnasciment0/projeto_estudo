import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  pacientes: Paciente[] = [
    {
      nome: 'Sidcley Nascimento',
      dataNascimento: new Date(1986, 7, 17),
      cpf: '123.456.789-10',
      email: 'sid@gmail.com'
    },
    {
      nome: 'Juliana Lubambo',
      dataNascimento: new Date(1990,11,23),
      cpf: '987.654.321-99',
      email: 'juju@gmail.com'
    },
  ];

  nome: string = '';
  dataNascimento?: Date;
  cpf: string = '';
  email: string = '';

  criar() {
    this.pacientes.push({
      nome: this.nome,
      dataNascimento: this.dataNascimento!,
      cpf: this.cpf,
      email: this.email
    });
  }

  deletar(index: number) {
    this.pacientes.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
