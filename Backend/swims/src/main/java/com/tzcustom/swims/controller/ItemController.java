package com.tzcustom.swims.controller;

import com.tzcustom.swims.model.ItemModel;
import com.tzcustom.swims.model.PngImageModel;
import com.tzcustom.swims.model.dto.ItemDeleteDto;
import com.tzcustom.swims.model.dto.ItemDto;
import com.tzcustom.swims.repository.ItemRepository;
import com.tzcustom.swims.service.ItemService;
import com.tzcustom.swims.service.StorageSpaceService;
import com.tzcustom.swims.utility.ItemMapper;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    private final ItemService itemService;
    private final StorageSpaceService storageSpaceService;

    public ItemController(ItemService itemService, StorageSpaceService storageSpaceService){
        this.itemService = itemService;
        this.storageSpaceService = storageSpaceService;
    }

    @Operation(summary = "Get items of a specific storage space",
            description = "Returns array of items associated with a storage space of ggiven name")
    @GetMapping(value = "by-storage-space")
    public ResponseEntity<List<ItemDto>> getItemsByStorageSpaceName(@RequestParam("storage_space_name") String storageSpaceName) {
        List<ItemModel> itemModels = itemService.findByStorageSpaceName(storageSpaceName);
        List<ItemDto> itemDtos = itemModels.stream()
                .map(ItemMapper::toDto)
                .collect(Collectors.toList());

        return ResponseEntity.ok(itemDtos);
    }

    @Operation(summary = "Deletes specific item",
            description = "Image is deleted based on primary key which consists of its name and storage space name that it's assigned to")
    @DeleteMapping(value = "/delete/item")
    public ResponseEntity<?> deleteItem(@RequestParam("name") String name,
                                        @RequestParam("storage_space_name") String storageSpaceName) {
        try {
            itemService.deleteByNameAndStorageSpaceName(name,storageSpaceName);
        } catch(Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        ItemDeleteDto itemDeleteDto = new ItemDeleteDto();
        itemDeleteDto.setName(name);
        itemDeleteDto.setStorageSpaceName(storageSpaceName);
        return ResponseEntity.ok(itemDeleteDto);
    }

    @Operation(summary = "Create a new item",
            description = "Creates a new item with all fields being required")
    @PostMapping("/create/item")
    public ResponseEntity<?> createItem(@RequestBody @Valid ItemModel itemModel) {
        if(itemModel.getQuantity() < 1){
            itemModel.setQuantity(1);
        }
        if(storageSpaceService.fetchStorageSpaceFromDbByName(itemModel.getStorageSpaceName()).isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Storage Space with name: " + itemModel.getStorageSpaceName() + " does not exist");
        }
        try {
            ItemModel newItem = itemService.createItem(itemModel);
            return ResponseEntity.status(HttpStatus.CREATED).body(ItemMapper.toDto(newItem));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating item");
        }
    }

    @Operation(summary = "Update an existing item",
            description = "Updates an existing item. Item name and storage space name cannot be changed.")
    @PutMapping("/update/item")
    public ResponseEntity<?> updateItem(@RequestBody @Valid ItemModel itemModel) {
        try {
            ItemModel updatedItem = itemService.updateItem(itemModel);
            return ResponseEntity.ok(updatedItem);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating item: " + e.getMessage());
        }
    }
}
