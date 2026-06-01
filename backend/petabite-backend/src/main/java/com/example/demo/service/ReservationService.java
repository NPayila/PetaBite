package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Reservation;
import com.example.demo.repository.ReservationRepository;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;

    public ReservationService(
            ReservationRepository reservationRepository
    ) {
        this.reservationRepository = reservationRepository;
    }

    public String createReservation(
            Reservation reservation
    ) {

        reservationRepository.save(reservation);

        return "Reservation received for "
                + reservation.getName();
    }

    public List<Reservation> getAllReservations() {

        return reservationRepository.findAll();

    }
}