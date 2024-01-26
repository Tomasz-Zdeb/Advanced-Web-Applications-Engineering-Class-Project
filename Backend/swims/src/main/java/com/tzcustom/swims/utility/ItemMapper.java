package com.tzcustom.swims.utility;

import com.tzcustom.swims.model.ItemModel;
import com.tzcustom.swims.model.dto.ItemDto;

public class ItemMapper {
    public static ItemDto toDto(ItemModel itemModel) {
        if (itemModel == null) {
            return null;
        }

        ItemDto itemDto = new ItemDto();
        itemDto.setName(itemModel.getName());
        itemDto.setDescription(itemModel.getDescription());
        itemDto.setQuantity(itemModel.getQuantity());
        return itemDto;
    }
}
