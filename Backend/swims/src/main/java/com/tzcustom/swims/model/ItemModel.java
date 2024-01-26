package com.tzcustom.swims.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "storage_space_items")
public class ItemModel {

    @Id
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "storage_space_name")
    private String storageSpaceName;
}
