package com.ecommerce.backend.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Produto implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	
	/*
	 * Atributos
	 */
	private String id;
	private String codigo;
	private String nome;
	private long precoUnitario;
	private String imgUrl;
	
	/*
	 * Construtores
	 */
	public Produto() {
		
	}
	
	public Produto(String id, String codigo, String nome, long precoUnitario, String imgUrl) {
		this.id = id;
		this.codigo = codigo;
		this.nome = nome;
		this.precoUnitario = precoUnitario;
		this.imgUrl = imgUrl;
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
	
	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
}