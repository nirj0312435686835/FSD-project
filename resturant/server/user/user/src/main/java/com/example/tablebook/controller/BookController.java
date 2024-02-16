package com.example.tablebook.controller;

import com.airline.user.model.User;
import com.example.tablebook.model.Reservation;
import com.example.tablebook.service.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class BookController {

@Autowired
private TableService tableService;

    @GetMapping("/reservation")
    public List<Reservation> get(){
        return tableService.get();
    }

    @PostMapping("/reservation")
    public Reservation save(@RequestBody Reservation reservationobj) {
        tableService.save(reservationobj);
        return  reservationobj;
    }

    @GetMapping("/reservation/{email}")
    public ResponseEntity<List<Reservation>> getReservationByEmail(@PathVariable("email") String email) {
        List<Reservation> reservations = tableService.getReservationsByEmail(email);

        if (reservations.isEmpty()) {
            throw new RuntimeException("No reservations found for email: " + email);
        }

        return ResponseEntity.ok(reservations);
    }

    @PutMapping("/reservation/update")
    public Reservation update(@RequestBody  Reservation reserveobj) {
        System.out.println(reserveobj);
        tableService.update(reserveobj);
        System.out.println("hello from reserve");
        return reserveobj;
    }

    @DeleteMapping("/reservation/{id}")
    public String delete(@PathVariable int id) {
        tableService.delete(id);
        return ("Table booked with id " + id + " has been deleted");
    }
}
