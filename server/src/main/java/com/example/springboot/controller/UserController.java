package com.example.springboot.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.example.springboot.model.ResponseObject;
import com.example.springboot.model.User;
import com.example.springboot.model.UserDto;
import com.example.springboot.service.UserService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseObject<User> saveUser(@RequestBody UserDto user){
        return new ResponseObject<User>(HttpStatus.OK.value(), "User saved successfully.",userService.save(user));
    }

    @GetMapping
    public ResponseObject<List<User>> listUser(){
        return new ResponseObject<List<User>>(HttpStatus.OK.value(), "User list fetched successfully.",userService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseObject<User> getOne(@PathVariable int id){
        return new ResponseObject<User>(HttpStatus.OK.value(), "User fetched successfully.",userService.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseObject<UserDto> update(@RequestBody UserDto userDto) {
        return new ResponseObject<UserDto>(HttpStatus.OK.value(), "User updated successfully.",userService.update(userDto));
    }

    @DeleteMapping("/{id}")
    public ResponseObject<Void> delete(@PathVariable int id) {
        userService.delete(id);
        return new ResponseObject<Void>(HttpStatus.OK.value(), "User deleted successfully.", null);
    }

}
