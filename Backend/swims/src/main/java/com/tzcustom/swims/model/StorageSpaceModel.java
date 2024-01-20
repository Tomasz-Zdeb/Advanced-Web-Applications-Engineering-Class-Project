package com.tzcustom.swims.model;


import jakarta.persistence.*;
import lombok.Getter;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Getter
@Table(name = "storage_spaces")
public class StorageSpaceModel {
    @Id
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "image_uuid")
    private UUID imageUUID;


    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
        name = "storage_spaces_to_tags",
        joinColumns = { @JoinColumn(name = "storage_space_name") },
        inverseJoinColumns = { @JoinColumn(name = "tag_name") })
    Set<TagModel> tags = new HashSet<>();
}