import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-loading.html',
  styleUrl: './route-loading.css',
})
export class RouteLoading implements OnInit, OnDestroy {
  loading = false;
  private routerSubscription?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
