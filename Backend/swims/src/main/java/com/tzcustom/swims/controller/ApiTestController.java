package com.tzcustom.swims.controller;

import com.tzcustom.swims.model.UserModel;
import com.tzcustom.swims.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/public")
public class ApiTestController {

    private final UserRepository userRepository;
    public ApiTestController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/test")
    public String getTest(){
        return "Hello World Spring App";
    }

    @GetMapping("/test/users")
    public ResponseEntity<List<UserModel>> getUsersTest() {
        List<UserModel> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }

    @PostMapping("/test")
    public String postTest() {
        return "POST:: Hello World!";
    }

}
