package com.example.demo.model;

public class Reservation {

    private String name;
    private String date;
    private String time;
    private String table;
    private int guests;

    public Reservation() {
    }

    public Reservation(String name, String date, String time, String table, int guests) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.table = table;
        this.guests = guests;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getGuests() {
        return guests;
    }
    public void setTable(String table) {
        this.table = table;
    }
    public String getTable() {
        return table;
    }

    public void setGuests(int guests) {
        this.guests = guests;
    }
}