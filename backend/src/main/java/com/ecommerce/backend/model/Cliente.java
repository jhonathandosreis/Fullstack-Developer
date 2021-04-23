package com.ecommerce.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cliente {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	/*
	 * Atributos
	 */
	private Long codigo;
	private String nome;
	
	/*
	 * Construtores
	 * Sobrecarga de métodos
	 */
	public Cliente() {
		
	}
	
	public Cliente(Long codigo, String nome) {
		this.codigo = codigo;
		this.nome = nome;
	}
	
	public Cliente(Cliente cliente) {
		this.codigo = cliente.getCodigo();
		this.nome = cliente.getNome();
	}
	
	/*
	 * Getters and Setters
	 */
	public Long getCodigo() {
		return codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}