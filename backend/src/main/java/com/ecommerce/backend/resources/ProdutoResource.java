package com.ecommerce.backend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.model.Produto;
import com.ecommerce.backend.repository.ProdutoRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/produto")
public class ProdutoResource {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@GetMapping
	public List<Produto> get() {
		return produtoRepository.findAll();
	}
	
	@PostMapping
	public void post(@RequestBody Produto produto) {
		produtoRepository.save(produto);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") String id) {
		produtoRepository.deleteById(id);
	}
}