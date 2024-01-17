import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'swims-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isXlScreen: boolean;
  isNavbarCollapsed: boolean = true;

  constructor() {
    this.isXlScreen = window.innerWidth >= 1200;
    this.onResize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isXlScreen = width >= 1200;
    if (this.isXlScreen) {
      this.isNavbarCollapsed = false;
    }
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
