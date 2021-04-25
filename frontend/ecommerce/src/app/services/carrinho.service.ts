import { Injectable } from '@angular/core';
import { Event } from '@angular/router';
import { CarrinhoProduto } from '../models/produtos-carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: CarrinhoProduto[] = [];

  constructor() { }

  getProdutoByEvent(evento: CarrinhoProduto) {
    this.produtos.push(evento);
  }

  getProdutos() {
    return this.produtos;
  }
}