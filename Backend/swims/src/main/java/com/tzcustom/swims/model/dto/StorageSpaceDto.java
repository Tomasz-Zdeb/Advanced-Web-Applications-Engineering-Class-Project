package com.tzcustom.swims.model.dto;

import java.util.List;
import java.util.UUID;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StorageSpaceDto {
    private String name;
    private String description;
    private UUID imageUUID;
    private List<TagDto> tags;
}



