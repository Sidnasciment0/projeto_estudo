import { Component, OnInit } from '@angular/core';

import { SorteioService } from './../../compartilhado/services/sorteio.service';

@Component({
  selector: 'app-app-sorteio',
  templateUrl: './app-sorteio.component.html',
  styleUrls: ['./app-sorteio.component.scss']
})
export class AppSorteioComponent implements OnInit {
  values: string = '';
  sorteado: string = '';

  enviar() {
    const nomes = this.values.split('\n');
    this.sorteioService.sortear(nomes).subscribe({
      next: (nome) => this.sorteado = nome,
      error: (err) => alert(err),
      complete: () => console.log("Observables chegou ao fim!")
    });
  }

  constructor(private sorteioService: SorteioService) { }

  ngOnInit(): void {
  }

}
