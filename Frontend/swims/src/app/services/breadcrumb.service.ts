import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private breadcrumbs = new BehaviorSubject<string[]>([]);
  
  

  constructor(private router: Router, private route: ActivatedRoute) {
    this.listenToRouting();
  }

  private listenToRouting() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: any) => {
      let url = event.urlAfterRedirects
      const trimmedUrl = url.startsWith('/') ? url.slice(1) : url;
      const parts = trimmedUrl.split('/');
      this.setBreadcrumbs(parts);
    });
    
  }

  setBreadcrumbs(breadcrumbs: string[]) {
    this.breadcrumbs.next(breadcrumbs);
  }

  getBreadcrumbs() {
    return this.breadcrumbs.asObservable();
  }
}