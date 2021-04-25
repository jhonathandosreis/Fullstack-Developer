import { Injectable } from '@angular/core';
import { CarrinhoProduto } from '../models/produtos-carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: CarrinhoProduto[] = [];

  constructor() { }

  getProdutoByEvent(evento: CarrinhoProduto) {
    if (!this.produtos.find(x => x.codigo === evento.codigo)) {
      this.produtos.push(evento);
    }
  }

  getProdutos() {
    return this.produtos;
  }
  
}