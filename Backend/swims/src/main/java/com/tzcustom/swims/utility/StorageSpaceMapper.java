package com.tzcustom.swims.utility;

import com.tzcustom.swims.model.StorageSpaceModel;
import com.tzcustom.swims.model.TagModel;
import com.tzcustom.swims.model.dto.StorageSpaceDto;
import com.tzcustom.swims.model.dto.TagDto;
import java.util.stream.Collectors;

public class StorageSpaceMapper {

    public static StorageSpaceDto toDto(StorageSpaceModel storageSpaceModel){
        StorageSpaceDto storageSpaceDto = new StorageSpaceDto();

        storageSpaceDto.setName(storageSpaceModel.getName());
        storageSpaceDto.setDescription(storageSpaceModel.getDescription());
        storageSpaceDto.setImageUUID(storageSpaceModel.getImageUUID());
        storageSpaceDto.setTags(storageSpaceModel.getTags().stream().map(StorageSpaceMapper::toDto).collect(Collectors.toList()));

        return storageSpaceDto;
    }

    private static TagDto toDto(TagModel tagModel){
        TagDto tagDto = new TagDto();

        tagDto.setName(tagModel.getName());
        tagDto.setColor(tagModel.getColor());

        return tagDto;
    }
}
