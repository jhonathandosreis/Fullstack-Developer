import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarrinhoValores } from 'src/app/models/carrinho-valores';
import { CarrinhoProduto } from 'src/app/models/produtos-carrinho';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  iconCarrinho = 'assets/icones/icone-carrinho.png';
  produtos: CarrinhoProduto[] = [];
  produtosComValorCalculado: CarrinhoValores[] = [];

  @Output() carrinhoDeCompras = new EventEmitter();
  
  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.produtos = this.carrinhoService.getProdutos();
  }

  addCarrinho(evento: CarrinhoProduto) {
    this.carrinhoService.getProdutoByEvent(evento);
    this.carrinhoDeCompras.emit({ carrinho: this.produtosComValorCalculado });
  }
}