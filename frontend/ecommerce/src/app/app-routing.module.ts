import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './pages/cadastro/cadastro-cliente/cadastro-cliente.component';
import { CadastroProdutoComponent } from './pages/cadastro/cadastro-produto/cadastro-produto.component';
import { ConsultarPedidoComponent } from './pages/pedido/consultar-pedido/consultar-pedido.component';
import { NovoPedidoComponent } from './pages/pedido/novo-pedido/novo-pedido.component';

const routes: Routes = [
  { path: 'novo-pedido', component: NovoPedidoComponent },
  { path: 'consultar-pedido', component: ConsultarPedidoComponent },
  { path: 'consultar-pedido/id', component: ConsultarPedidoComponent },
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'cadastro-produto', component: CadastroProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
