package com.tzcustom.swims.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

import java.util.UUID;

@Entity
@Getter
@Table(name = "png_images")
public class PngImageModel {
    @Id
    @Column(name = "image_id")
    private UUID id;
    @Column(name = "image_binary", columnDefinition="bytea")
    private byte[] imageBinary;
}