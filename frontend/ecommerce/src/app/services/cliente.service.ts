import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/cliente`);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}/cliente`, cliente);
  }

  delete(codigo: any): Observable<void> {
    const url = `${this.baseUrl}/cliente/${codigo}`
    return this.http.delete<void>(url);
  }
}
