import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  iconCliente = 'assets/icones/icone-cliente.png';

  options: string[] = [];
  formulario = new FormControl();
  listClientes: Cliente[] = [];
  selectedCliente: any;
  @Output() clienteIsSelected = new EventEmitter();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes() {
    this.clienteService.findAll().subscribe(r => {
      this.listClientes = r;
    })
  }

  onSubmit() {
    this.selectedCliente = this.listClientes.find(buscado => buscado.nome == this.formulario.value);
    this.clienteIsSelected.emit({cliente: this.selectedCliente});
  }
}