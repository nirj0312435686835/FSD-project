package com.example.BusNav2._Backend.service;

import com.example.BusNav2._Backend.models.Student;
import com.example.BusNav2._Backend.rep.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private StudentRepository studentRepository;

    public Student findByUsername(String username){
        return studentRepository.findByUsername((username));
    }

    public Student saveUser(Student user) {
        return studentRepository.save(user);
    }
}
