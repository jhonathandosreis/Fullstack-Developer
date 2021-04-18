package com.ecommerce.backend.calculo.frete.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.calculo.frete.model.CalculoFrete;
import com.ecommerce.backend.calculo.frete.service.CalculaFrete;

@CrossOrigin("*")
@RestController
@RequestMapping("/frete")
public class FreteResource {
	
	@Autowired
	CalculaFrete calculaFrete;
	
	@PostMapping
	public double calculaValorFrete(@RequestBody CalculoFrete calculoFrete) {
		if (calculoFrete.getTotalItens() > 0 ) {
			return calculaFrete.valorFreteCalculado(calculoFrete.getTotalItens());
		}
		else return 0;
	}
}