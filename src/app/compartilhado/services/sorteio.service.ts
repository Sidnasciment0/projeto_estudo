import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SorteioService {

  constructor() { }

  sortear(nomes: string[]): Observable<string> { // Recebendo uma lista de nomes
    return new Observable((subscriber) => {
      if(nomes.length === 1) { // Retornar se a lista está vazia
        subscriber.error('Lista vazia');
      } else { // Senão, faz o sorteio em cima da quantidade de elementos
        const sorteado = Math.floor(Math.random() * nomes.length); // Escolhar um número de 0 até o máximo do índice (nomes = que são os alunos da nossa turma). Obs: O Math.floor é para não deixar número quebrado, pois o índice não tem número quebrado.

        subscriber.next(nomes[sorteado]); // Índice da pessoal sorteada, emitindo apenas uma informação.
        subscriber.complete();
      }
    });
  }
}
