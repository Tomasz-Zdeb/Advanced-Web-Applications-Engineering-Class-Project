import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageSpaceService } from '../../../services/storage.space.service';

interface Tag {
  name: string;
  color: string;
}

interface StorageSpace {
  name: string;
  description: string;
  imageUUID: string;
  tags: Tag[];
  imageURL?: String;
}

@Component({
  selector: 'swims-storage-spaces',
  templateUrl: './storage-spaces.component.html',
  styleUrls: ['./storage-spaces.component.css']
})
export class StorageSpacesComponent implements OnInit{
  storageSpaces: StorageSpace[] = [];
  dynamicContainerStyle = this.getDynamicContainerStyle(window.innerWidth);

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.dynamicContainerStyle = this.getDynamicContainerStyle(event.target.innerWidth);
  }

  getDynamicContainerStyle(width: number) {
    const xlBreakpoint = 1200;
    if (width > xlBreakpoint) {
      return { 'overflow-y': 'auto', 'max-height': 'calc(100% - 260px)'};
    } else {

      return { 'overflow-y': 'initial' };
    }
  }

  constructor(private router: Router, private storageSpaceService: StorageSpaceService) {}

  goToDetails(name: string): void {
    this.router.navigate(['/dashboard', name]);
  }
  
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.storageSpaceService.fetchStorageSpaces().subscribe(
      data => this.storageSpaces = data,
      error => console.error('Error:', error)
    );
  }

  deleteStorageSpace(name: string) {
    this.storageSpaceService.deleteStorageSpace(name).subscribe(
      updatedSpaces => {
        this.storageSpaces = updatedSpaces;
      },
      error => console.error('Error deleting storage space:', error)
    );
  }
}
