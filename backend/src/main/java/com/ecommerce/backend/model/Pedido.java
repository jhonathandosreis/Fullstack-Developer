package com.ecommerce.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Pedido {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	/*
	 * Atributos
	 */
	private Long id;
	
	@ManyToOne
	private Cliente Cliente;
	
	private int qntItens;
	private Double valorTotal;
	private Double valorFrete;
	
	/*
	 * Construtores
	 * Sobrecarga de métodos
	 */
	public Pedido() {
		
	}
	
	public Pedido(Long id, int qntItens, Double valorTotal, Double valorFrete) {
		
		this.id = id;
		this.qntItens = qntItens;
		this.valorTotal = valorTotal;
		this.valorFrete = valorFrete;
	}
	
	public Pedido(Pedido pedido) {
		this.id = pedido.getId();
		this.qntItens = pedido.getQntItens();
		this.valorTotal = pedido.getValorTotal();
		this.valorFrete = pedido.getValorFrete();
	}
	
	/*
	 * Getters and Setters
	 */

	public Long getId() {
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