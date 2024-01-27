import { Component, OnInit, HostListener } from '@angular/core';
import { StorageSpace } from '../../../interfaces/storage.space.interface';
import { StorageSpaceService } from '../../../services/storage.space.service';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../interfaces/item.interface';

@Component({
  selector: 'swims-storage-space-details',
  templateUrl: './storage-space-details.component.html',
  styleUrls: ['./storage-space-details.component.css']
})
export class StorageSpaceDetailsComponent implements OnInit{
  storageSpace?: StorageSpace;
  searchName: string = '';
  items: Item[] = [];
  public myStyles: any;

  constructor(private storageSpaceService: StorageSpaceService, private route: ActivatedRoute, private itemService: ItemService){
    this.updateStyles(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateStyles((event.target as Window).innerWidth);
  }

  private updateStyles(width: number) {
    if (width > 1200) {
      this.myStyles = {
        'max-height': '90vh',
        'overflow-y': 'scroll'
      };
    } else {
      this.myStyles = {
        'max-height': '100%',
        'overflow-y': 'auto'
      };
    }
  }

  ngOnInit(): void {
    // Fetches storage space name from the route
    this.route.paramMap.subscribe(params => {
      const param = params.get('name');
      if (param) {
          this.searchName = param;
      }
  });
  // Fetches data using storage space name
  this.fetchData();
  }

  fetchData() {
    // Fetch storage space details
    this.storageSpaceService.fetchStorageSpaces().subscribe(
      data => this.storageSpace = data.find(space => space.name === this.searchName),
      error => console.error('Error:', error)
    );
    // Fetch Items
    this.itemService.getByStorageSpaceName('main-warehouse').subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
