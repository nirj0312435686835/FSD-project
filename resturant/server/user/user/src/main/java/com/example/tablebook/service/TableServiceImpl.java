package com.example.tablebook.service;

import com.example.tablebook.dao.TableDao;
import com.example.tablebook.model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TableServiceImpl implements TableService{

    @Autowired
    private TableDao tableDao;


    @Transactional
    @Override
    public List<Reservation> get() {
        return tableDao.get();
    }

    @Override
    public List<Reservation> getReservationsByEmail(String email) {
        return tableDao.getReservationsByEmail(email);
    }


    @Transactional
    @Override
    public void save(Reservation reservation) {
        tableDao.save(reservation);
    }

    @Transactional
    @Override
    public void delete(int id) {
        tableDao.delete(id);
    }

    @Transactional
    @Override
    public void update(Reservation updatedReservation) {
//        System.out.println(updatedReservation);
        tableDao.update(updatedReservation);
    }
}
