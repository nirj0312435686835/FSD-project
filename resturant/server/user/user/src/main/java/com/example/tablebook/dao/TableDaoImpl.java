package com.example.tablebook.dao;

import com.airline.user.model.User;
import com.example.tablebook.model.Reservation;
import jakarta.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TableDaoImpl implements TableDao{



    @Autowired
    private EntityManager entityManager;


    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Reservation> get() {
        Session session=entityManager.unwrap(Session.class);
        Query<Reservation> query= session.createQuery("From Reservation",Reservation.class);
        List<Reservation> list=query.getResultList();
        return list;
    }

    @Override
    public List<Reservation> getReservationsByEmail(String email) {
        Session session=entityManager.unwrap(Session.class);
        Query<Reservation> query = session.createQuery("FROM Reservation WHERE email = :email", Reservation.class);
        query.setParameter("email", email);

        // Execute query and return results
        return query.getResultList();
    }


    @Override
    public void delete(int id) {
        Session session=entityManager.unwrap(Session.class);
        Reservation reservation=session.get(Reservation.class,id);
        session.delete(reservation);
    }

    @Override
    public void save(Reservation reservation) {
        Session session=entityManager.unwrap(Session.class);
        session.saveOrUpdate(reservation);
    }

    @Override
    public void update(Reservation updatedReservation) {
        Session session = entityManager.unwrap(Session.class);
        Reservation existingReservation = session.get(Reservation.class, updatedReservation.getId());
        System.out.println("hello22");
        System.out.println(updatedReservation.getFullname());
        if (existingReservation != null) {
            // Update the existing reservation object with the new data
            existingReservation.setFullname(updatedReservation.getFullname());
            existingReservation.setEmail(updatedReservation.getEmail());
            existingReservation.setReservationDate(updatedReservation.getReservationDate());
            existingReservation.setReservationTime(updatedReservation.getReservationTime());
            existingReservation.setPhone(updatedReservation.getPhone());
            existingReservation.setNumberOfPeople(updatedReservation.getNumberOfPeople());
            existingReservation.setRestaurantName(updatedReservation.getRestaurantName());
            // Update other fields as needed
            System.out.println(existingReservation.getFullname());
            // Save the updated reservation back to the database
            session.update(existingReservation);
            System.out.println(existingReservation);

        }
    }


}
