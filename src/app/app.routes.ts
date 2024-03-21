import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./project/website/website.module').then(m => m.WebsiteModule) }
];
