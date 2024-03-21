import { Routes } from '@angular/router';
import {WebsiteLayoutComponent} from "./project/website/website-layout.component";
import {HomeComponent} from "./project/website/home/home.component";
import {LoginComponent} from "./project/website/login/login.component";
import {SignUpComponent} from "./project/website/sign-up/sign-up.component";
import {ContactUsComponent} from "./project/website/contact-us/contact-us.component";
import {AboutUsComponent} from "./project/website/about-us/about-us.component";

export const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'login',
    component: WebsiteLayoutComponent,
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: 'sign-up',
    component: WebsiteLayoutComponent,
    children: [{ path: '', component: SignUpComponent }],
  },
  {
    path: 'contact-us',
    component: WebsiteLayoutComponent,
    children: [{ path: '', component: ContactUsComponent }],
  },
  {
    path: 'about-us',
    component: WebsiteLayoutComponent,
    children: [{ path: '', component: AboutUsComponent }],
  }
];
