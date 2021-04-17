package com.ecommerce.backend.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Cliente implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	/*
	 * Atributos
	 */
	private String id;
	private String codigo;
	private String nome;
	
	/*
	 * Construtores
	 */
	public Cliente() {
		
	}
	
	public Cliente(String id, String codigo, String nome) {
		this.id = id;
		this.codigo = codigo;
		this.nome = nome;
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