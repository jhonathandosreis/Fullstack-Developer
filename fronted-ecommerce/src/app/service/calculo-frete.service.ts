import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculoFreteService {

  baseUrl = environment.baseUrl;

  constructor(public httpClient: HttpClient) {
  }

  calcularFrete(totalItens: any) {
      return this.httpClient.post(this.baseUrl, totalItens);
  }
}
