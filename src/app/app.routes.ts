import { Routes } from '@angular/router';
import {HomeComponent} from "./project/website/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '', component: HomeComponent, pathMatch: 'full' }],
  },
];
