import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'swims-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isXlScreen: boolean;

  constructor() {
    this.isXlScreen = window.innerWidth >= 1200;
    this.onResize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isXlScreen = width >= 1200;
  }
}
