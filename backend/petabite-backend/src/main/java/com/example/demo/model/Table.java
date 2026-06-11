package com.example.demo.model;

public class Table {

    private String id;
    private boolean available;

    public Table() {
    }

    public Table(
            String id,
            boolean available
    ) {
        this.id = id;
        this.available = available;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(
            boolean available
    ) {
        this.available = available;
    }
}