package com.tzcustom.swims.controller;

import com.tzcustom.swims.model.PngImageModel;
import com.tzcustom.swims.repository.PngImageRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import io.swagger.v3.oas.annotations.Operation;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/images")
public class ImageController {
    private final PngImageRepository pngImageRepository;

    public ImageController(PngImageRepository pngImageRepository){
        this.pngImageRepository = pngImageRepository;
    }

    @Operation(summary = "Get a PNG image", description = "Returns a PNG image of given UUID")
    @GetMapping(value = "/get/image/png/{uuid}", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<byte[]> getPngImage(@PathVariable UUID uuid) {
        Optional<PngImageModel> returnedImage = pngImageRepository.findById(uuid);
        return returnedImage.map(pngImageModel -> ResponseEntity
                .ok(pngImageModel.getImageBinary()))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Upload a PNG image", description = "Uploads a new PNG image to the server")
    @PostMapping(path = "/upload/image/png", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadPngImage(@RequestParam("file") MultipartFile file){
        try {
            PngImageModel pngImage = new PngImageModel();
            pngImage.setImageBinary(file.getBytes());
            pngImage.setId(UUID.randomUUID());
            pngImage = pngImageRepository.save(pngImage);

            UUID imageId = pngImage.getId();
            return ResponseEntity.ok().body("Image uploaded successfully with ID:" + imageId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Could not upload the image: " + e.getMessage());
        }
    }

    @Operation(summary = "Delete a PNG image", description = "Deletes a PNG image with given UUID completely - including DB")
    @DeleteMapping(value = "/delete/image/png/{uuid}")
    public ResponseEntity<?> deletePngImage(@PathVariable UUID uuid) {
        return pngImageRepository.findById(uuid)
                .map(pngImageModel -> {
                    pngImageRepository.delete(pngImageModel);
                    return ResponseEntity.ok().body("Image with ID " + uuid + " was deleted successfully.");
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}