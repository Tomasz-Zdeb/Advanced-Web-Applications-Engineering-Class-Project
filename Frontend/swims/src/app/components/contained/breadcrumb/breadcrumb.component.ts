import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { UsernameService } from 'src/app/services/username.service.service';

@Component({
  selector: 'swims-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnDestroy {
  breadcrumbs: string[] = [];
  private breadcrumbSubscription: Subscription;
  username: string;

  constructor(private breadcrumbService: BreadcrumbService, private usernameService: UsernameService) {
    this.breadcrumbSubscription = this.breadcrumbService.getBreadcrumbs().subscribe(
      (breadcrumbs) => {
        this.breadcrumbs = breadcrumbs;
      }
    );
    this.username = usernameService.getUsername();
  }

  ngOnDestroy() {
    this.breadcrumbSubscription.unsubscribe();
  }
}