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

import com.ecommerce.backend.model.Cliente;
import com.ecommerce.backend.repository.ClienteRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/cliente")
public class ClienteResource {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@GetMapping
	public List<Cliente> get() {
		return clienteRepository.findAll();
	}
	
	@PostMapping
	public void post(@RequestBody Cliente cliente) {
		clienteRepository.save(cliente);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable String id) {
		clienteRepository.deleteById(id);
	}
}