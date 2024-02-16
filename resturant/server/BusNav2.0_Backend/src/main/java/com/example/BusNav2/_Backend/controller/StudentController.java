package com.example.BusNav2._Backend.controller;

import com.example.BusNav2._Backend.models.Student;
import com.example.BusNav2._Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Student registerUser(@RequestBody Student student) {
//        Student savedStudent = studentRepository.save(student);
        return userService.saveUser(student);
    }

    @PostMapping("/login")
    public Student loginUser(@RequestBody Student student) {
        return userService.findByUsername((student.getUsername()));
    }
}
