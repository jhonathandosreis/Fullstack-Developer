import { Cliente } from './cliente';

export class Pedido {
  numero: any;
  qntItens: any;
  valorFrete: any;
  valorTotal: any;
  cliente: Cliente = new Cliente;
}