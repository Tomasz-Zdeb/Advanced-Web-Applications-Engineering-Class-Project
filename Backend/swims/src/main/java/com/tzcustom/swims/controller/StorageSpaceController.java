package com.tzcustom.swims.controller;

import com.tzcustom.swims.model.StorageSpaceModel;
import com.tzcustom.swims.model.dto.StorageSpaceDto;
import com.tzcustom.swims.repository.StorageSpaceRepository;
import com.tzcustom.swims.utility.StorageSpaceMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class StorageSpaceController {
    private StorageSpaceRepository storageSpaceRepository;

    StorageSpaceController(StorageSpaceRepository storageSpaceRepository){
        this.storageSpaceRepository = storageSpaceRepository;
    }

    @GetMapping("/storagespaces")
    public ResponseEntity<List<StorageSpaceDto>> getPublikacje() {
        List<StorageSpaceModel> storageSpaceModels = storageSpaceRepository.findAll();
        if (storageSpaceModels == null || (storageSpaceModels.isEmpty())){
            return new ResponseEntity<List<StorageSpaceDto>>(HttpStatus.NOT_FOUND);
        }
        List<StorageSpaceDto> storageSpaceDtos = storageSpaceModels.stream().map(StorageSpaceMapper::toDto).toList();
        return ResponseEntity.ok(storageSpaceDtos);

    }
}
