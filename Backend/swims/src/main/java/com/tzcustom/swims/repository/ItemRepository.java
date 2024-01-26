package com.tzcustom.swims.repository;

import com.tzcustom.swims.model.ItemModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ItemRepository extends JpaRepository<ItemModel, String> {
    List<ItemModel> findByStorageSpaceName(String storageSpaceName);
    void deleteByNameAndStorageSpaceName(String name, String storageSpaceName);
    Optional<ItemModel> findByNameAndStorageSpaceName(String name, String storageSpaceName);
}
