package com.tzcustom.swims.controller;

import com.tzcustom.swims.model.HelpAccordionItemModel;
import com.tzcustom.swims.model.StorageSpaceModel;
import com.tzcustom.swims.model.dto.StorageSpaceDto;
import com.tzcustom.swims.repository.HelpAccordionItemRepository;
import com.tzcustom.swims.repository.PngImageRepository;
import com.tzcustom.swims.utility.StorageSpaceMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/help")
public class HelpController {
    private final HelpAccordionItemRepository helpAccordionItemRepository;

    public HelpController(HelpAccordionItemRepository helpAccordionItemRepository){
        this.helpAccordionItemRepository = helpAccordionItemRepository;
    }

    @GetMapping("/accordionitems")
    public ResponseEntity<List<HelpAccordionItemModel>> getHelpAccordionItems() {
        List<HelpAccordionItemModel> helpAccordionItemModels = helpAccordionItemRepository.findAll();
        if (helpAccordionItemModels == null || (helpAccordionItemModels.isEmpty())){
            return new ResponseEntity<List<HelpAccordionItemModel>>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(helpAccordionItemModels);
    }
}
