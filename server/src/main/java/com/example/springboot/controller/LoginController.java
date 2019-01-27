package com.example.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.ResponseObject;
import com.example.springboot.model.AuthToken;
import com.example.springboot.model.LoginUser;
import com.example.springboot.model.User;
import com.example.springboot.model.UserDto;
import com.example.springboot.security.JwtTokenUtil;
import com.example.springboot.service.UserService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public ResponseObject<AuthToken> register(@RequestBody LoginUser loginUser) throws AuthenticationException {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword()));
        final User user = userService.findOne(loginUser.getUsername());
        final String token = jwtTokenUtil.generateToken(user);
        return new ResponseObject<AuthToken>(200, "success",new AuthToken(token, user.getUsername()));
    }
    
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseObject<User> saveUser(@RequestBody UserDto user){
        return new ResponseObject<User>(HttpStatus.OK.value(), "User saved successfully.",userService.save(user));
    }

}
