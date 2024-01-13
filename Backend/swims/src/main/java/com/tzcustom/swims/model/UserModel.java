package com.tzcustom.swims.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

import java.util.UUID;

@Entity
@Getter
@Table(name = "user_table")
public class UserModel {
    @Id
    @Column(name = "user_id")
    private UUID id;
    @Column(name = "user_name")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "active")
    private boolean enabled;
    @Column(name = "role")
    private String role;
}