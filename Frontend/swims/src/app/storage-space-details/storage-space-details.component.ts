import { Component, OnInit } from '@angular/core';
import { StorageSpace } from '../storage.space.interface';
import { StorageSpaceService } from '../storage.space.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'swims-storage-space-details',
  templateUrl: './storage-space-details.component.html',
  styleUrls: ['./storage-space-details.component.css']
})
export class StorageSpaceDetailsComponent implements OnInit{
  storageSpace?: StorageSpace;
  searchName: string = '';

  constructor(private storageSpaceService: StorageSpaceService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const param = params.get('name'); // Replace 'paramName' with the name of your route parameter
      if (param) {
          this.searchName = param;
          console.log(`Parameter Value: ${param}`);
      }
  });
  this.fetchData();
  }

  fetchData() {
    this.storageSpaceService.fetchStorageSpaces().subscribe(
      data => this.storageSpace = data.find(space => space.name === this.searchName),
      error => console.error('Error:', error)
    );
  }
}
