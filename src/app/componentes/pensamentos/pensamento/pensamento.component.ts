import { Pensamento } from './pensamento';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  // @Input faz com que o pai receba as informações que está no filho. (<div *ngFor="let pensamento of listaPensamentos"> <app-pensamento></app-pensamento> </div>)
  @Input () pensamento: Pensamento = {
    id: 0,
    conteudo: 'Eu amo Angular',
    autoria: 'Fael',
    modelo: 'modelo1'
  }
  //256 caracteres ira quebrar a forma 
  larguraPensamento (): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
