import { Cliente } from "./cliente.model";

export interface Pedido {
    numero: number;
    qntItens: number;
    valorFrete: number;
    valorTotal: number;
    cliente: Cliente;
}