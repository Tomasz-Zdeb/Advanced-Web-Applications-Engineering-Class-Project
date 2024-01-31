import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'swims-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  isXlScreen: boolean;
  isNavbarCollapsed: boolean = true;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {
    
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

  logout() {
    this.authService.logout();
    this.http.post('http://localhost:8080/api/logout', {}).subscribe({
      next: (response) => {
        console.log('Logged out successfully', response);
      },
      error: (error) => {
        console.error('Error logging out', error);
      }
    });
    this.router.navigate(['/login']);
  }
}
