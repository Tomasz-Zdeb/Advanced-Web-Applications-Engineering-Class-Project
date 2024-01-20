import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
  selector: 'swims-swimshelp',
  templateUrl: './swimshelp.component.html',
  styleUrls: ['./swimshelp.component.css']
})
export class SwimshelpComponent implements OnInit{

  isXlScreen: boolean;
  testData: string = '';

  constructor(private http: HttpClient, private breadcrumbService: BreadcrumbService) {
    this.isXlScreen = window.innerWidth >= 1200;
    this.onResize(window.innerWidth);
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs(['Help']);
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