package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Order;
import com.example.demo.service.OrderService;

@CrossOrigin(
        origins = "http://localhost:5173"
)
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService
            orderService;

    public OrderController(
            OrderService orderService
    ) {
        this.orderService =
                orderService;
    }

    @PostMapping
    public String createOrder(
            @RequestBody Order order
    ) {

        return orderService
                .createOrder(order);

    }

    @GetMapping
    public List<Order> getOrders() {

        return orderService
                .getAllOrders();

    }
}