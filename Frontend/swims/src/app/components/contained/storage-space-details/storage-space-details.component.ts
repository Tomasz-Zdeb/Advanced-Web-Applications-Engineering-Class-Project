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
  isCreatingItem = false;
  newItem: Item = {
      name: '',
      description: '',
      quantity: 1,
      storageSpaceName: ''
  };
  itemCreationFailedMessage: string = '';
  itemCreationSuccesfullMessage: string = '';
  namePattern = /^[^\s](.*[^\s])?$/;
  showSuccessToast = false;
  showFailureToast = false;

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
    this.fetchItems();
  }

  fetchItems(){
    this.itemService.getByStorageSpaceName('main-warehouse').subscribe(
      data => {
        this.items = data.map(item => ({ ...item, isEditing: false }));
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  deleteItem(itemName: string, storageSpaceName: string): void {
    this.itemService.setStorageSpaceName(storageSpaceName);
    this.itemService.deleteItem(itemName, storageSpaceName).subscribe(
      (response: any) => {
        this.fetchItems();
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  showCreateItemForm() {
    this.isCreatingItem = true;
    this.newItem = {
        name: '',
        description: '',
        quantity: 1,
        storageSpaceName: this.storageSpace?.name ? this.storageSpace?.name : ''
    }
  }

  cancelCreation() {
    this.isCreatingItem = false;
  }

  createItem(){
    console.warn(this.newItem);
    this.itemService.createItem(this.newItem)
      .subscribe(
        (response: any) => {
          console.log('Item created', response);
          this.itemCreationSuccesfullMessage = 'item: ' + this.newItem.name + ' succesfully created! Want to create next item? Go on!';
          setTimeout(() => this.itemCreationSuccesfullMessage = "",5000);
          this.fetchItems();
          this.showCreateItemForm();
        },
        error => {
          console.error('Error creating item', error);
          this.itemCreationFailedMessage = 'Item creation error, please verify input values';
          setTimeout(() => this.itemCreationFailedMessage = "",3000);
        }
      );
  }

  startEditing(item: Item) {
    item.isEditing = true;
  }

  submitUpdate(item: Item) {
    item.storageSpaceName = this.storageSpace?.name;
    this.itemService.updateItem(item).subscribe(
      (response: any) => {
        console.log('Item updated', response);
        item.isEditing = false;
        this.showSuccessToast = true;
        setTimeout(() => this.showSuccessToast = false, 3000);
      },
      (error: any ) => {
        this.fetchData();
        console.error('Error updating item', error)
        this.showFailureToast = true;
        setTimeout(() => this.showFailureToast = false, 3000);
      }
    );
  }
}
