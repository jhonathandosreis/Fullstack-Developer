import { Cliente } from './cliente';

export interface Pedido {
  numero: string;
  qntItens: number;
  valorFrete: number;
  valorTotal: number;
  cliente: Cliente;
}