package com.example.tablebook.dao;

import com.airline.user.model.User;
import com.example.tablebook.model.Reservation;

import java.util.List;

public interface TableDao {


    List<Reservation> get();
    public List<Reservation> getReservationsByEmail(String email);
    void delete(int id);

    void save(Reservation reservation);

    void update(Reservation updatedReservation);

}
