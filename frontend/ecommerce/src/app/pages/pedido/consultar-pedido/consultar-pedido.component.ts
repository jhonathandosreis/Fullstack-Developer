import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css']
})
export class ConsultarPedidoComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'cliente.nome', 'qntItens', 'valorFrete', 'valorTotal', 'deletar'];

  pedido: Pedido[] = [];
  dataSource: any;
  logo = 'assets/icones/icone-pedidos.png';

  constructor() { }

  ngOnInit(): void {
  }

}
