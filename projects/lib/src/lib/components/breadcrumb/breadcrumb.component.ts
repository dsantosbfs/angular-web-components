import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';

import { BreadcrumbInterface } from './breadcrumb.interface';

@Component({
  selector: 'lib-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: BreadcrumbInterface[];

  private ROUTE_DATA_BREADCRUMB = 'breadcrumb';

  get previousPage() {
    return this.breadcrumbs[this.breadcrumbs.length - 2];
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {
    this.breadcrumbs = [];
   }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(event => {
      this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
    });

    this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url: string= '',
    breadcrumbs: BreadcrumbInterface[] = []
  ): BreadcrumbInterface[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(this.ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      const routeURL = child.snapshot.url.map(segment => segment.path).join('/');

      if (routeURL === '') {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      url += `/${routeURL}`;

      const breadcrumb: BreadcrumbInterface = {
        label: child.snapshot.data[this.ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url
      };

      breadcrumbs.push(breadcrumb);

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
