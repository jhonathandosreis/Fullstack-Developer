import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  save(pedido: any) {
    throw new Error('Method not implemented.');
  }

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/pedido`);
  }

  create(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.baseUrl}/pedido`, pedido);
  }

  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}/pedido/${id}`
    return this.http.delete<void>(url);
  }

  list() {
    return this.http.get<Pedido[]>(this.baseUrl);
  }
}
