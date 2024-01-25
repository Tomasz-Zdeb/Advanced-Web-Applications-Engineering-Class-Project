import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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


  constructor(private http: HttpClient, private router: Router) {}

  goToDetails(name: string): void {
    this.router.navigate(['/dashboard', name]);
  }
  
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const url = 'http://localhost:8080/api/storagespaces';
    this.http.get<StorageSpace[]>(url).subscribe(
      data => {
        this.storageSpaces = data;
        //console.log('Data fetched:', this.storageSpaces);
        this.fetchZdjecia();
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  fetchZdjecia() {
      this.storageSpaces.forEach(storageSpace => {this.fetchPhoto(storageSpace)});
  }

  fetchPhoto(storageSpace: StorageSpace) {
    const photoUrl = "http://localhost:8080/api/images/get/image/png/" + storageSpace.imageUUID;
    this.http.get(photoUrl, { responseType: 'blob' }).subscribe(
      blob => {
        const objectURL = URL.createObjectURL(blob);
        storageSpace.imageURL = objectURL;      },
      err => console.error(err)
    );
  }
}
