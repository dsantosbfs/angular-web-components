import { Params } from '@angular/router';

export interface BreadcrumbInterface {
  label: string;
  params?: Params;
  url: string;
}
