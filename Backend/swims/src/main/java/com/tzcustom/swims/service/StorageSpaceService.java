package com.tzcustom.swims.service;

import com.tzcustom.swims.model.ItemModel;
import com.tzcustom.swims.model.PngImageModel;
import com.tzcustom.swims.model.StorageSpaceModel;
import com.tzcustom.swims.model.dto.StorageSpaceStatisticDto;
import com.tzcustom.swims.repository.PngImageRepository;
import com.tzcustom.swims.repository.StorageSpaceRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StorageSpaceService {

    private final StorageSpaceRepository storageSpaceRepository;
    private final PngImageRepository pngImageRepository;

    private final ItemService itemService;

    StorageSpaceService(StorageSpaceRepository storageSpaceRepository,
                        PngImageRepository pngImageRepository,
                        ItemService itemService){
        this.storageSpaceRepository = storageSpaceRepository;
        this.pngImageRepository = pngImageRepository;
        this.itemService = itemService;
    }



    @Transactional
    public void deleteStorageSpaceFromDB(String name) {
        Optional<StorageSpaceModel> storageSpace = storageSpaceRepository.findById(name);
        if (storageSpace.isPresent()) {
            storageSpace.get().setTags(new HashSet<>());
            storageSpaceRepository.save(storageSpace.get());
            Optional<PngImageModel> associatedImage =  pngImageRepository.findById(storageSpace.get().getImageUUID());
            associatedImage.ifPresent(pngImageRepository::delete);

            storageSpaceRepository.delete(storageSpace.get());
        }
    }

    @Transactional
    public List<StorageSpaceModel> fetchStorageSpacesFromDb(){
        return storageSpaceRepository.findAll();
    }

    @Transactional
    public Optional<StorageSpaceModel> fetchStorageSpaceFromDbByName(String name){
        return storageSpaceRepository.findById(name);
    }

    public List<StorageSpaceStatisticDto> getStorageSpaceStatistics(){
        List<StorageSpaceStatisticDto> spaceDtos;
        List<StorageSpaceModel> storageSpaces = fetchStorageSpacesFromDb();
        spaceDtos = storageSpaces.stream()
                .map((storageSpace) -> {
                    StorageSpaceStatisticDto tmpStatDto = new StorageSpaceStatisticDto();
                    tmpStatDto.setName(storageSpace.getName());
                    tmpStatDto.setItemNumber(itemService.findByStorageSpaceName(tmpStatDto.getName()).stream()
                            .mapToInt(ItemModel::getQuantity)
                            .sum());
                    return tmpStatDto;
                })
                .collect(Collectors.toList());
        return spaceDtos;
    }
}



