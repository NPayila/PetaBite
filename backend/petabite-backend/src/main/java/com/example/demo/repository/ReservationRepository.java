package com.example.demo.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.model.Reservation;

@Repository
public class ReservationRepository {

    private final List<Reservation> reservations =
            new ArrayList<>();

    public void save(
            Reservation reservation
    ) {
        reservations.add(reservation);
    }

    public List<Reservation> findAll() {
        return reservations;
    }
}