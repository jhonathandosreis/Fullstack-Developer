import { Component, OnInit } from '@angular/core';
import { CarrinhoProduto } from 'src/app/models/produtos-carrinho.model';
import { CarrinhoValores } from 'src/app/models/carrinho-valores.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  iconCarrinho = 'assets/icones/icone-carrinho.png';
  produtos: CarrinhoProduto[] = [];
  produtosComValorCalculado: CarrinhoValores[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
