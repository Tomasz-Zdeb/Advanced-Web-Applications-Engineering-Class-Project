package com.tzcustom.swims.model;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Table(name = "tags")
public class TagModel {
    @Id
    @Column(name = "name")
    private String name;
    @Column(name = "color")
    private String color;
    @ManyToMany(mappedBy = "tags")
    private Set<StorageSpaceModel> storageSpaces = new HashSet<>();
}