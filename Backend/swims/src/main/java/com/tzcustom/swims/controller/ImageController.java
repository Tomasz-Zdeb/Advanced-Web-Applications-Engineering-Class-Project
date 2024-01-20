package com.tzcustom.swims.controller;

import com.tzcustom.swims.model.PngImageModel;
import com.tzcustom.swims.repository.PngImageRepository;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/images")
public class ImageController {
    private final PngImageRepository pngImageRepository;

    public ImageController(PngImageRepository pngImageRepository){
        this.pngImageRepository = pngImageRepository;
    }

    @GetMapping(value = "/get/image/png/{uuid}", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<byte[]> getPngImage(@PathVariable UUID uuid) {
        Optional<PngImageModel> returnedImage = pngImageRepository.findById(uuid);
        return returnedImage.map(pngImageModel -> ResponseEntity
                .ok(pngImageModel.getImageBinary()))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}