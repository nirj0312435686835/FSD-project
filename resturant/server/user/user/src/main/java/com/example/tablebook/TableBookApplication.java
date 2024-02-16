package com.example.tablebook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication(scanBasePackages = {"com.example.tablebook"})
public class TableBookApplication {

    public static void main(String[] args) {
        SpringApplication.run(TableBookApplication.class, args);
    }
}
