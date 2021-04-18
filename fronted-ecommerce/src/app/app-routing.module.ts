import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarPedidoComponent } from './pages/pedido/consultar-pedido/consultar-pedido.component';
import { NovoPedidoComponent } from './pages/pedido/novo-pedido/novo-pedido.component';

const routes: Routes = [
  { path: 'novo-pedido', component: NovoPedidoComponent },
  { path: 'consultar-pedido', component: ConsultarPedidoComponent },
  { path: 'consultar-pedido/id', component: ConsultarPedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
