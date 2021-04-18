import { Cliente } from "./cliente";

export interface Pedido {
    numero: number;
    qntItens: number;
    valorFrete: number;
    valorTotal: number;
    cliente: Cliente;
}