package com.tzcustom.swims.controller;

import com.tzcustom.swims.model.StorageSpaceModel;
import com.tzcustom.swims.model.dto.StorageSpaceDto;
import com.tzcustom.swims.model.dto.StorageSpaceStatisticDto;
import com.tzcustom.swims.repository.StorageSpaceRepository;
import com.tzcustom.swims.service.StorageSpaceService;
import com.tzcustom.swims.utility.StorageSpaceMapper;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class StorageSpaceController {

    private final StorageSpaceService storageSpaceService;

    StorageSpaceController(StorageSpaceRepository storageSpaceRepository, StorageSpaceService storageSpaceService){
        this.storageSpaceService = storageSpaceService;
    }

    @Operation(summary = "Fetch storage spaces", description = "Returns a list of storage spaces")
    @GetMapping("/storagespaces")
    public ResponseEntity<List<StorageSpaceDto>> getStorageSpaces() {
        List<StorageSpaceModel> storageSpaceModels = storageSpaceService.fetchStorageSpacesFromDb();
        if (storageSpaceModels == null || (storageSpaceModels.isEmpty())){
            return new ResponseEntity<List<StorageSpaceDto>>(HttpStatus.NOT_FOUND);
        }
        List<StorageSpaceDto> storageSpaceDtos = storageSpaceModels.stream().map(StorageSpaceMapper::toDto).toList();
        return ResponseEntity.ok(storageSpaceDtos);

    }

    @Operation(summary = "Delete a storage space", description = "Deletes a storage space of given name")
    @DeleteMapping("/storagespace/{name}")
    public ResponseEntity<?> deleteStorageSpace(@PathVariable String name) {
        Optional<StorageSpaceModel> storageSpace = storageSpaceService.fetchStorageSpaceFromDbByName(name);
        if (storageSpace.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        storageSpaceService.deleteStorageSpaceFromDB(name);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Operation(summary = "Fetch storage spaces stats", description = "Returns a list of statistics objects for each storage space")
    @GetMapping("/storagespaces/stats")
    public ResponseEntity<List<StorageSpaceStatisticDto>> getStorageSpaceStatistics(){
        List<StorageSpaceStatisticDto> storageSpaceStatistics = storageSpaceService.getStorageSpaceStatistics();
        if (storageSpaceStatistics == null || (storageSpaceStatistics.isEmpty())){
            return new ResponseEntity<List<StorageSpaceStatisticDto>>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(storageSpaceStatistics);
    }
}
