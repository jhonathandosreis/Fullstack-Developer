import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  options: string[] = [];
  formulario = new FormControl();
  listProdutos!: Produto[];
  selectedProduto: any;
  @Output() produtoSelecionado = new EventEmitter();
  produto$!: Observable<string[]>;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listarProdutos();
    this.produto$ = this.formulario.value;
  }

  listarProdutos() {
    this.produtoService.findAll().subscribe(r => {
      this.listProdutos = r;
    });
  }

  onSubmit() {
    this.selectedProduto = this.listProdutos.find(buscado => buscado.nome == this.formulario.value);
    this.produtoSelecionado.emit({produto: this.selectedProduto});
  }
}
