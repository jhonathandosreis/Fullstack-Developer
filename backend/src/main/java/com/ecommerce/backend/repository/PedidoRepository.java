package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.Pedido;

@Repository
public interface PedidoRepository  extends JpaRepository<Pedido, String> {

}
