package com.tzcustom.swims.repository;

import com.tzcustom.swims.model.PngImageModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PngImageRepository extends JpaRepository<PngImageModel, UUID> {

}