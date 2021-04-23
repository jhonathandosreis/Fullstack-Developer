import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  options: string[] = [];
  formulario = new FormControl();
  produto$!: Observable<string[]>;
  listProdutos!: Produto[];
  selectedProduto: any;

  constructor() { }

  ngOnInit(): void {
  }

}
