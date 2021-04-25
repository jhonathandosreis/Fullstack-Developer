import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarrinhoProduto } from 'src/app/models/produtos-carrinho';

@Component({
  selector: 'app-calculo-valores',
  templateUrl: './calculo-valores.component.html',
  styleUrls: ['./calculo-valores.component.css']
})
export class CalculoValoresComponent implements OnInit {

  prod!: CarrinhoProduto;
  formulario!: FormGroup;
  @Output() valorCalculado = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      precoUnitario: [this.prod.precoUnitario],
      quantidadeTotalDeItens: [this.prod.quantidade],
      valorTotalDeItens: [this.prod.valorTotal]
    });
    this.valorCalculado.emit(this.prod);
  }
}
