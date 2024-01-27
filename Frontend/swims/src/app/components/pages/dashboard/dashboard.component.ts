import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreadcrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'swims-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  isXlScreen: boolean;
  testData: string = '';

  constructor(private http: HttpClient, private breadcrumbService: BreadcrumbService) {
    this.isXlScreen = window.innerWidth >= 1200;
    this.onResize(window.innerWidth);
  }

  ngOnInit() {

  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isXlScreen = width >= 1200;
  }
}