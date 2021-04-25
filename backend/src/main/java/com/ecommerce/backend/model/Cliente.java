package com.ecommerce.backend.model;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID codigo;
	private String nome;

	/*
	 * Construtores Sobrecarga de métodos
	 */
	public Cliente() {

	}

	public Cliente(UUID codigo, String nome) {
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
	public UUID getCodigo() {
		return codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}