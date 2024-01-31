import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreadcrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'swims-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent{
  isXlScreen: boolean;
  showAlert = true;

  constructor(private http: HttpClient, private breadcrumbService: BreadcrumbService) {
    this.isXlScreen = window.innerWidth >= 1200;
    this.onResize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isXlScreen = width >= 1200;
  }

  dismissAlert() {
    this.showAlert = false;
  }
}









 


  