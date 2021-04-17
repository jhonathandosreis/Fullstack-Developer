package com.ecommerce.calculofrete.service;

import static java.lang.Math.random;

import org.springframework.stereotype.Service;

@Service
public class CalculaFrete {

	public double valorFreteCalculado(int totalItens) {
		var frete = (random() * ((9 - 5) + 1)) + 5;
		System.out.println(frete);

		return frete * totalItens;
	}
}