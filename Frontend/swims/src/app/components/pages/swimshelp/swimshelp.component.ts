import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreadcrumbService } from '../../../services/breadcrumb.service';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'swims-swimshelp',
  templateUrl: './swimshelp.component.html',
  styleUrls: ['./swimshelp.component.css']
})
export class SwimshelpComponent implements OnInit{

  accordionItems: AccordionItem[] = [];
  isXlScreen: boolean;
  testData: string = '';

  constructor(private http: HttpClient, private breadcrumbService: BreadcrumbService) {
    this.isXlScreen = window.innerWidth >= 1200;
    this.onResize(window.innerWidth);
  }

  ngOnInit() {
    this.fetchData();
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isXlScreen = width >= 1200;
  }
  fetchData() {
    const url = 'http://localhost:8080/api/help/accordionitems';
    this.http.get<AccordionItem[]>(url).subscribe(
      data => {
        this.accordionItems = data;
        console.log('Data fetched:', this.testData);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}