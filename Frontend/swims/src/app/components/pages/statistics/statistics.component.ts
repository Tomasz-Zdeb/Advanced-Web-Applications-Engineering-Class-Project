import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { ImageUploadService } from '../../../services/image.upload.service';

@Component({
  selector: 'swims-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit{
  isXlScreen: boolean;
  selectedFile: File | null = null;
  message: string = '';

  constructor(private http: HttpClient, private breadcrumbService: BreadcrumbService, private imageUploadService: ImageUploadService) {
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
    //this.fetchData();
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isXlScreen = width >= 1200;
  }

  // fetchData() {
  //   const url = 'http://localhost:8080/api/public/test';
  //   this.http.get<string>(url, { responseType: 'text' as 'json' }).subscribe(
  //     data => {
  //       this.testData = data;
  //       console.log('Data fetched:', this.testData);
  //     },
  //     error => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }
}




