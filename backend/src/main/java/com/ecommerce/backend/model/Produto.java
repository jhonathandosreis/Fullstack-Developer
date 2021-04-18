package com.ecommerce.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Produto {
	
	@Id
	/*
	 * Atributos
	 */
	private String id;
	private String codigo;
	private String nome;
	private long precoUnitario;
	private String imagemUrl;
	
	/*
	 * Construtores
	 * Sobrecarga de métodos
	 */
	public Produto() {
		
	}
	
	public Produto(String id, String codigo, String nome, long precoUnitario, String imagemUrl) {
		this.id = id;
		this.codigo = codigo;
		this.nome = nome;
		this.precoUnitario = precoUnitario;
		this.imagemUrl = imagemUrl;
	}
	
	public Produto(Produto produto) {
		this.id = produto.getId();
		this.codigo = produto.getCodigo();
		this.nome = produto.getNome();
		this.precoUnitario = produto.getPrecoUnitario();
		this.imagemUrl = produto.getImagemUrl();
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