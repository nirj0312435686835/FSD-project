package com.example.tablebook.service;

import com.airline.user.model.User;
import com.example.tablebook.model.Reservation;

import java.util.List;

public interface TableService {

    List<Reservation> get();

    //    User get(int id);
    public List<Reservation> getReservationsByEmail(String email);

    void save(Reservation reservation);

    void delete(int id);

    void update(Reservation updatedReservation);
}
