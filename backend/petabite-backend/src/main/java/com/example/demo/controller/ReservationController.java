package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Reservation;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @PostMapping
    public String createReservation(
            @RequestBody Reservation reservation
    ) {

        return "Reservation received for "
                + reservation.getName();

    }

}