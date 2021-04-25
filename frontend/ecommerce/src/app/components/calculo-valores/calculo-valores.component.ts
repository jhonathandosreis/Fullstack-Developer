import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CarrinhoProduto } from "src/app/models/produtos-carrinho";

@Component({
  selector: "app-calculo-valores",
  templateUrl: "./calculo-valores.component.html",
  styleUrls: ["./calculo-valores.component.css"],
})
export class CalculoValoresComponent implements OnInit {
  @Input() prod!: CarrinhoProduto;
  formulario!: FormGroup;
  @Output() valorCalculado = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      precoUnitario: [this.prod.precoUnitario],
      quantidade: [this.prod.quantidade],
      valorTotal: [this.prod.valorTotal],
    });
    this.valorCalculado.emit(this.prod);
  }

  onCalcularPrecoTotal(produto: CarrinhoProduto, event: any) {
    this.prod.valorTotal = produto.precoUnitario * event.target.value;
    this.prod.valorTotal = produto.valorTotal;
    this.prod.quantidade = event.target.value;
    if (
      this.prod.valorTotal > 0 &&
      this.prod.precoUnitario !== this.prod.valorTotal
    ) {
      this.valorCalculado.emit(this.prod);
    }
  }
}
