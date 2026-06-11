package com.example.demo.model;

public class Order {

    private String customerName;
    private String phone;
    private String email;
    private String orderType;

    public Order() {
    }

    public Order(
            String customerName,
            String phone,
            String email,
            String orderType
    ) {
        this.customerName = customerName;
        this.phone = phone;
        this.email = email;
        this.orderType = orderType;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(
            String customerName
    ) {
        this.customerName = customerName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(
            String phone
    ) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(
            String email
    ) {
        this.email = email;
    }

    public String getOrderType() {
        return orderType;
    }

    public void setOrderType(
            String orderType
    ) {
        this.orderType = orderType;
    }
}