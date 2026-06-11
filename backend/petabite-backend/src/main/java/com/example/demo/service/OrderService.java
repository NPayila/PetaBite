package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Order;
import com.example.demo.repository.OrderRepository;

@Service
public class OrderService {

    private final OrderRepository
            orderRepository;

    public OrderService(
            OrderRepository orderRepository
    ) {
        this.orderRepository =
                orderRepository;
    }

    public String createOrder(
            Order order
    ) {

        orderRepository.save(order);

        return "Order Created Successfully";
    }

    public List<Order> getAllOrders() {

        return orderRepository.findAll();

    }
}