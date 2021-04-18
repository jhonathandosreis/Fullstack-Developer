package com.ecommerce.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Pedido {

	@Id
	
	/*
	 * Atributos
	 */
	private String id;
	
	@ManyToOne
	private Cliente Cliente;
	
	private int qntItens;
	private Double valorTotal;
	private Double valorFrete;
	
	/*
	 * Construtores
	 */
	public Pedido() {
		
	}
	
	public Pedido(String id, int qntItens, Double valorTotal, Double valorFrete) {
		
		this.id = id;
		this.qntItens = qntItens;
		this.valorTotal = valorTotal;
		this.valorFrete = valorFrete;
	}
	
	/*
	 * Getters and Setters
	 */
	public String getId() {
		return id;
	}

	public Cliente getCliente() {
		return Cliente;
	}

	public void setCliente(Cliente cliente) {
		Cliente = cliente;
	}

	public int getQntItens() {
		return qntItens;
	}

	public void setQntItens(int qntItens) {
		this.qntItens = qntItens;
	}

	public Double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}

	public Double getValorFrete() {
		return valorFrete;
	}

	public void setValorFrete(Double valorFrete) {
		this.valorFrete = valorFrete;
	}
	
}