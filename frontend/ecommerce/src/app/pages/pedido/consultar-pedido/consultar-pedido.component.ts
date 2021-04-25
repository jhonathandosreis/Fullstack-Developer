import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private formBuilder: FormBuilder, private pedidoService: PedidoService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.populaLista();
  }

  populaLista() {
    this.pedidoService.findAll().subscribe(value => {
      const data: Pedido[] = value;
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
