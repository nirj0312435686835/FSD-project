package com.example.tablebook.model;


import jakarta.persistence.*;
import org.apache.catalina.User;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="reservation")
public class Reservation {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String fullname;

    @Column
    private String email;

    @Column(name = "restaurantName")
    private String restaurantName;

    @Column
    private long phone;

    @Column(name = "numberOfPeople")
    private int numberOfPeople;

    @Column(name = "reservationDate")
    private String reservationDate;

    @Column(name = "reservationTime")
    private String reservationTime;


//    @ManyToMany(mappedBy = "reservations")
//    private List<User> users = new ArrayList<>();
//
//    public List<User> getUsers() {
//
//        return users;
//    }
//
//    public void setUsers(List<User> users) {
//        this.users = users;
//    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }


    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public int getNumberOfPeople() {
        return numberOfPeople;
    }

    public void setNumberOfPeople(int numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
    }

    public String getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(String reservationDate) {
        this.reservationDate = reservationDate;
    }

    public String getReservationTime() {
        return reservationTime;
    }

    public void setReservationTime(String reservationTime) {
        this.reservationTime = reservationTime;
    }



    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", fullname='" + fullname + '\'' +
                ", phone='" + phone + '\'' +
                ", resturent='" + restaurantName + '\'' +
                ", reservationtime='" + reservationTime + '\'' +
                ", reservationdate='" + reservationDate + '\'' +
                ", numberofpeople='" + numberOfPeople + '\'' +
                '}';
    }
}
