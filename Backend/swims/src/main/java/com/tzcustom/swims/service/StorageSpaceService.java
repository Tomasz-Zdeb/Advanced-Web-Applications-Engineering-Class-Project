package com.tzcustom.swims.service;

import com.tzcustom.swims.model.StorageSpaceModel;
import com.tzcustom.swims.repository.StorageSpaceRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
public class StorageSpaceService {

    private final StorageSpaceRepository storageSpaceRepository;

    StorageSpaceService(StorageSpaceRepository storageSpaceRepository){
        this.storageSpaceRepository = storageSpaceRepository;
    }

    @Transactional
    public void deleteStorageSpaceFromDB(String name) {
        Optional<StorageSpaceModel> storageSpace = storageSpaceRepository.findById(name);
        if (storageSpace.isPresent()) {
            storageSpace.get().setTags(new HashSet<>());
            storageSpaceRepository.save(storageSpace.get());

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

}



