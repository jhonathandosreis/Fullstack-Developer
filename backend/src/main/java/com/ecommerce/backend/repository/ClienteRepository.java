package com.ecommerce.backend.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, UUID>{

}
