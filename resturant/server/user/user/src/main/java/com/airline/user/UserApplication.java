package com.airline.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(scanBasePackages = {"com.airline.user", "com.example.tablebook"})
//@ComponentScan(basePackages = {"com.airline.user.contoller", "com.example.tablebook.controller"})

public class UserApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}

}
