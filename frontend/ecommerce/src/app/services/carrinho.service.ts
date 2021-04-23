import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarrinhoValores } from '../models/carrinho-valores';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<CarrinhoValores[]> {
    return this.http.get<CarrinhoValores[]>(this.baseUrl);
  }

  create(carrinho: CarrinhoValores): Observable<CarrinhoValores> {
    return this.http.post<CarrinhoValores>(this.baseUrl, carrinho);
  }

  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }
}
