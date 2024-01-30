package com.tzcustom.swims.service;

import com.tzcustom.swims.model.ItemModel;
import com.tzcustom.swims.repository.ItemRepository;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ItemService {

    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }

    public List<ItemModel> findByStorageSpaceName(String storageSpaceName){
        return itemRepository.findByStorageSpaceName(storageSpaceName);
    }

    @Transactional
    public void deleteByNameAndStorageSpaceName(String name, String storageSpaceName){
        itemRepository.deleteByNameAndStorageSpaceName(name, storageSpaceName);
    }

    public ItemModel createItem(ItemModel itemModel) {
        Optional<ItemModel> existingItem = itemRepository.findByNameAndStorageSpaceName(itemModel.getName(),itemModel.getStorageSpaceName());
        if(existingItem.isPresent()){
            throw new EntityExistsException("Item" + itemModel.getName() + " already exists in storage space: " + itemModel.getStorageSpaceName());
        }
        return itemRepository.save(itemModel);
    }

    public ItemModel updateItem(ItemModel itemModel) {
        Optional<ItemModel> existingItem = itemRepository.findByNameAndStorageSpaceName(itemModel.getName(),itemModel.getStorageSpaceName());
        if(existingItem.isEmpty()){
            throw new EntityNotFoundException("Item" + itemModel.getName() + "," + itemModel.getStorageSpaceName() + "not found");
        }
        existingItem.get().setDescription(itemModel.getDescription());
        existingItem.get().setQuantity((itemModel.getQuantity()>=1) ? itemModel.getQuantity() : 1);

        return itemRepository.save(existingItem.get());
    }
}
