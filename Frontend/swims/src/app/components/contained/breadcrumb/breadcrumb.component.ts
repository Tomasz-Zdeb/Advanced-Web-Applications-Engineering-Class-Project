import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'swims-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnDestroy {
  breadcrumbs: string[] = [];
  private breadcrumbSubscription: Subscription;

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbSubscription = this.breadcrumbService.getBreadcrumbs().subscribe(
      (breadcrumbs) => {
        this.breadcrumbs = breadcrumbs;
      }
    );
  }

  ngOnDestroy() {
    this.breadcrumbSubscription.unsubscribe();
  }
}