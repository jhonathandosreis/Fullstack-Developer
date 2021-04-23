import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-cadastro-cliente",
  templateUrl: "./cadastro-cliente.component.html",
  styleUrls: ["./cadastro-cliente.component.css"],
})
export class CadastroClienteComponent implements OnInit {
  displayedColumns: string[] = ["codigo", "nome", "deletar"];
  logo = "assets/icones/icone-cliente.png";
  cliente: Cliente[] = [];
  formulario!: FormGroup;
  dataSource: any;

  novoCliente: Cliente = {
    codigo: '',
    nome: '',
  };

  constructor(private formBuilder: FormBuilder,private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.formulario = this.formBuilder.group({ codigo: null, nome: [] });
    this.clienteService.findAll().subscribe((resp) => {
      this.dataSource = new MatTableDataSource(resp);
    });
  }

  create(): void {
    this.clienteService.create(this.novoCliente).subscribe((r) => {
      location.reload();
    });
  }

  delete(cliente: Cliente) {
    this.clienteService.delete(cliente.codigo).subscribe((r) => {
      location.reload();
    });
  }
}