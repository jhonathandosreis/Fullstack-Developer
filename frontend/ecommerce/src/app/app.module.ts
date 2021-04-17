import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProdutoComponent } from './components/produto/produto.component';
import { CadastroClienteComponent } from './pages/cadastro/cadastro-cliente/cadastro-cliente.component';
import { CadastroProdutoComponent } from './pages/cadastro/cadastro-produto/cadastro-produto.component';
import { ConsultarPedidoComponent } from './pages/pedido/consultar-pedido/consultar-pedido.component';
import { NovoPedidoComponent } from './pages/pedido/novo-pedido/novo-pedido.component';
import { CalculoValoresComponent } from './components/calculo-valores/calculo-valores.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ClienteComponent } from './components/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProdutoComponent,
    CadastroClienteComponent,
    CadastroProdutoComponent,
    ConsultarPedidoComponent,
    NovoPedidoComponent,
    CalculoValoresComponent,
    CarrinhoComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }