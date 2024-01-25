import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'swims-storage-space-details',
  templateUrl: './storage-space-details.component.html',
  styleUrls: ['./storage-space-details.component.css']
})
export class StorageSpaceDetailsComponent implements OnInit{
  title = '';
  constructor(private breadcrumService: BreadcrumbService, private router: Router){}

  ngOnInit(): void {

  }
}
