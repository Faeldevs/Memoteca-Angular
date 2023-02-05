import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'listarPensamento',
  pathMatch: 'full' // considera toda a URL do localhost
},
{
  path: 'criarPensamento',
  component: CriarPensamentosComponent
},

{
  path: 'listarPensamento',
  component: ListarPensamentoComponent
},
{
  path: 'pensamentos/excluirPensamento/:id',
  component: ExcluirPensamentoComponent
},

{
  path: 'pensamentos/editarPensamento/:id',
  component: EditarPensamentoComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
