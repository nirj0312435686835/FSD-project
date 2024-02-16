package com.example.BusNav2._Backend.rep;

import com.example.BusNav2._Backend.models.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student, Integer> {
    Student findByUsername(String username);
}
