import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackOfficeLayoutComponent} from "./project/backoffice/back-office-layout.component";
import {DashboardComponent} from "./project/backoffice/dashboard/dashboard.component";
import {ProductsComponent} from "./project/backoffice/products/products.component";
import {WebsiteLayoutComponent} from "./project/website/website-layout.component";
import {LoginComponent} from "./project/website/login/login.component";
import {SignUpComponent} from "./project/website/sign-up/sign-up.component";
import {ContactUsComponent} from "./project/website/contact-us/contact-us.component";
import {AboutUsComponent} from "./project/website/about-us/about-us.component";
import {NotFoundComponent} from "./project/website/not-found/not-found.component";
import {HomeComponent} from "./project/website/home/home.component";

export const routes: Routes = [
  {
    path: 'backoffice',
    component: BackOfficeLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductsComponent }
    ]
  },
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
