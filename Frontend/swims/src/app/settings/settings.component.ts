import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
  selector: 'swims-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
  isXlScreen: boolean;

  constructor(private http: HttpClient, private breadcrumbService: BreadcrumbService) {
    this.isXlScreen = window.innerWidth >= 1200;
    this.onResize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isXlScreen = width >= 1200;
  }

  ngOnInit() {
    //this.fetchData();
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









 


  