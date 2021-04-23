import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  
  iconCliente = 'assets/icones/icone-cliente.png';

  options: string[] = [];
  formulario = new FormControl();
  clientes$!: Observable<string[]>;
  listClientes: Cliente[] = [];
  selectedCliente: any;

  constructor() { }

  ngOnInit(): void {
  }

}
