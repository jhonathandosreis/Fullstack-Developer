import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent implements OnInit {

  iconCliente = 'assets/icones/icone-cliente.png';
  iconCarrinho = 'assets/icones/icone-carrinho.png';
  iconTotal = 'assets/icones/icone-total.png';
  impressaoCliente: any;

  valorTotal: any;
  valorItens!: number;
  freteRecebido!: number;
  qntProdutos!: number;
  verificaFrete = true;

  numero = Math.floor(10000 + Math.random() * 9000);

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  /*finalizarPedido() {
    this.pedidoService.create(this.novoPedido).subscribe(r => {
      location.reload();
    });
  }*/
}
