package com.ecommerce.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Produto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	/*
	 * Atributos
	 */
	private Long codigo;
	private String nome;
	private long precoUnitario;
	
	/*
	 * Construtores
	 * Sobrecarga de métodos
	 */
	public Produto() {
		
	}
	
	public Produto(Long codigo, String nome, long precoUnitario) {
		this.codigo = codigo;
		this.nome = nome;
		this.precoUnitario = precoUnitario;
	}
	
	public Produto(Produto produto) {
		this.codigo = produto.getCodigo();
		this.nome = produto.getNome();
		this.precoUnitario = produto.getPrecoUnitario();
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

	public long getPrecoUnitario() {
		return precoUnitario;
	}

	public void setPrecoUnitario(long precoUnitario) {
		this.precoUnitario = precoUnitario;
	}
	
}