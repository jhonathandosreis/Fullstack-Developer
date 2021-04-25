import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CarrinhoValores } from 'src/app/models/carrinho-valores';
import { Produto } from 'src/app/models/produto';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'precoUnitario', 'deletar'];
  dataSource: any;
  produto: Produto[] = [];
  formulario!: FormGroup;

  novoProduto: Produto = {
    codigo: '',
    nome: '',
    precoUnitario: '',
  };

  constructor(private formBuilder: FormBuilder,private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.formulario = this.formBuilder.group({ codigo: null, nome: [], precoUnitario: null});
    this.produtoService.findAll().subscribe((resp) => {
      this.dataSource = new MatTableDataSource(resp);
    });
  }

  create(): void {
    this.produtoService.create(this.novoProduto).subscribe((r) => {
      location.reload();
    });
  }

  delete(produto: Produto) {
    this.produtoService.delete(produto.codigo).subscribe((r) => {
      location.reload();
    })
  }
}