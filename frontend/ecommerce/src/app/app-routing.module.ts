import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoPedidoComponent } from './pages/pedido/novo-pedido/novo-pedido.component';

const routes: Routes = [
  { path: 'novo-pedido', component: NovoPedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
