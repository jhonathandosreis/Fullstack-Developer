package com.ecommerce.backend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.model.Pedido;
import com.ecommerce.backend.repository.PedidoRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/pedido")
public class PedidoResources {

	@Autowired
	private PedidoRepository pedidoRepository;

	@GetMapping
	public List<Pedido> get() {
		return pedidoRepository.findAll();
	}

	@PostMapping
	public void post(@RequestBody Pedido pedido) {
		pedidoRepository.save(pedido);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") String id) {
		pedidoRepository.deleteById(id);
	}
}