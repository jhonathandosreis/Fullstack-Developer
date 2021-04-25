package com.ecommerce.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	private Long codigo;
	private String nome;
	private long precoUnitario;
	private String imagemUrl;
	
	/*
	 * Construtores
	 */
	public Produto() {
		
	}
	
	public Produto(Long codigo, String nome, long precoUnitario, String imageUrl) {
		this.codigo = codigo;
		this.nome = nome;
		this.precoUnitario = precoUnitario;
		this.imagemUrl = imageUrl;
	}
	
	public Produto(Produto produto) {
		this.codigo = produto.getCodigo();
		this.nome = produto.getNome();
		this.precoUnitario = produto.getPrecoUnitario();
		this.imagemUrl = produto.getImagemUrl();
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

	public String getImagemUrl() {
		return imagemUrl;
	}

	public void setImagemUrl(String imagemUrl) {
		this.imagemUrl = imagemUrl;
	}
}