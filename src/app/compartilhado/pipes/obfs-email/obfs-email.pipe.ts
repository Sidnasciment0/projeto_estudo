import { Pipe, PipeTransform } from '@angular/core';

// Crie um pipe ('obfs-email') que, dado um email, ofusca o nome do usuário.
// Exemplo: {{'jose.almir@gmail.com'}} | obfs-email => 'j*********@gmail.com'

@Pipe({
  name: 'obfsEmail'
})
export class ObfsEmailPipe implements PipeTransform {

  transform(email: string) {

    // const splitEmail = email.split('@');
    // const user = splitEmail[0];
    // const dominio = splitEmail[1];
    const [user, dominio] = email.split('@');

    const initial = user[0];
    const obfs = '*'.repeat(user.length - 1);

    return `${initial}${obfs}@${dominio}`;
  }
}
