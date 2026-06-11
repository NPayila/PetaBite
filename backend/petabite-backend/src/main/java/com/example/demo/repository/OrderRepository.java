package com.example.demo.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.model.Order;

@Repository
public class OrderRepository {

    private final List<Order> orders =
            new ArrayList<>();

    public void save(
            Order order
    ) {
        orders.add(order);
    }

    public List<Order> findAll() {
        return orders;
    }
}