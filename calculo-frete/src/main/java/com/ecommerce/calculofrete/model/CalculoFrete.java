package com.ecommerce.calculofrete.model;

public class CalculoFrete {
	
	/*
	 * Atributos
	 */
	private int totalItens;
	
	/*
	 * Construtor
	 */
	public CalculoFrete(int totalItens) {
		this.totalItens = totalItens;
	}

	/*
	 * Getters and Setters
	 */
	public int getTotalItens() {
		return totalItens;
	}

	public void setTotalItens(int totalItens) {
		this.totalItens = totalItens;
	}
}