package com.ecommerce.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Cliente {
	
	@Id
	/*
	 * Atributos
	 */
	private String id;
	private String codigo;
	private String nome;
	
	/*
	 * Construtores
	 * Sobrecarga de métodos
	 */
	public Cliente() {
		
	}
	
	public Cliente(String id, String codigo, String nome) {
		this.id = id;
		this.codigo = codigo;
		this.nome = nome;
	}
	
	public Cliente(Cliente cliente) {
		this.id = cliente.getId();
		this.codigo = cliente.getCodigo();
		this.nome = cliente.getNome();
	}
	
	/*
	 * Getters and Setters
	 */
	public String getId() {
		return id;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}