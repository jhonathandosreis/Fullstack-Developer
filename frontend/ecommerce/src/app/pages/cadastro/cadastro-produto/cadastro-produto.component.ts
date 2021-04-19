import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CarrinhoValores } from 'src/app/models/carrinho-valores';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'precoUnitario', 'deletar'];

  produto: Produto[] = [];
  novoProduto!: Produto;
  dataSource: any;
  produtos: CarrinhoValores[] = [];

  formulario!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
