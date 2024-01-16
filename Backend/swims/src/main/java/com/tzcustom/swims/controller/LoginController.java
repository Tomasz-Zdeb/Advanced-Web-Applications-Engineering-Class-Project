package com.tzcustom.swims.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public")
public class LoginController {
    SecurityContextLogoutHandler logoutHandler = new SecurityContextLogoutHandler();

    @PostMapping("/logout")
    public ResponseEntity performLogout(Authentication authentication, HttpServletRequest request, HttpServletResponse response) {
        this.logoutHandler.setClearAuthentication(true);
        this.logoutHandler.setInvalidateHttpSession(true);
        this.logoutHandler.logout(request, response, authentication);
        HttpHeaders headers = new HttpHeaders();
        headers.set(HttpHeaders.WWW_AUTHENTICATE, "Basic realm=\"Realm\"");

        return new ResponseEntity<>("Access Denied", headers, HttpStatus.UNAUTHORIZED);
    }
}

