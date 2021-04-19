import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'deletar'];

  cliente: Cliente[] = [];
  novoCliente: any;
  dataSource: any;
  logo = 'assets/icones/icone-cliente.png';

  formulario!: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

}
