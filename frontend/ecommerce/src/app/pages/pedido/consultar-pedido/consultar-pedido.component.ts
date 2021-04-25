import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

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

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.populaLista();
  }

  populaLista() {
    this.pedidoService.findAll().subscribe(value => {
      const data: Pedido[] = value;
      console.log(data)
      this.dataSource = new MatTableDataSource(data);
    });
  }

  delete(pedido: Pedido) {
    this.pedidoService.delete(pedido.id).subscribe(r => {
      location.reload();
    })
  }
}