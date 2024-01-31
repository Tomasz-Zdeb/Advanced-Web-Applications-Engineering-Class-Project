import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { ImageUploadService } from '../../../services/image.upload.service';
import { StorageSpaceStat } from 'src/app/interfaces/storage.space.stats.interface';
import { StorageSpaceStatsServiceService } from 'src/app/services/storage.space.stats.service.service';

@Component({
  selector: 'swims-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit{
  isXlScreen: boolean;
  selectedFile: File | null = null;
  message: string = '';
  showAlert = true;
  storageSpaces: StorageSpaceStat[] = [];
  totalItems = 0;
  averageItemsPerSpace = 0;

  constructor(private http: HttpClient, private breadcrumbService: BreadcrumbService, private imageUploadService: ImageUploadService, private statsService: StorageSpaceStatsServiceService) {
    this.isXlScreen = window.innerWidth >= 1200;
    this.onResize(window.innerWidth);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(): void {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        response => {
          this.message = 'Image uploaded successfully! ID: ' + response;
        },
        error => {
          this.message = 'Failed to upload image.';
        }
      );
    }
  }

  ngOnInit() {
    this.fetchData();
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isXlScreen = width >= 1200;
  }

  dismissAlert() {
    this.showAlert = false;
  }

   fetchData() {
     this.statsService.fetchStorageSpaceStats().subscribe(
      data => {
        this.storageSpaces = data;
        this.calculateStats();
      },
      error => console.error('There was an error!', error)
    );
   }

   calculateStats() {
    this.totalItems = this.storageSpaces.reduce((acc, curr) => acc + curr.itemNumber, 0);
    this.averageItemsPerSpace = this.storageSpaces.length > 0 ? Math.round(this.totalItems / this.storageSpaces.length) : 0;
  }
}




