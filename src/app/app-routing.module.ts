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
import {UserDashboardComponent} from "./project/website/user-dashboard/user-dashboard.component";
import {DashboardTabComponent} from "./project/website/user-dashboard/dashboard-tab/dashboard-tab.component";
import {AddressTabComponent} from "./project/website/user-dashboard/address-tab/address-tab.component";
import {SecurityTabComponent} from "./project/website/user-dashboard/security-tab/security-tab.component";
import {CardTabComponent} from "./project/website/user-dashboard/card-tab/card-tab.component";
import {WishListTabComponent} from "./project/website/user-dashboard/wish-list-tab/wish-list-tab.component";
import {OrderTabComponent} from "./project/website/user-dashboard/order-tab/order-tab.component";
import {ProfileTabComponent} from "./project/website/user-dashboard/profile-tab/profile-tab.component";

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
      {
        path: 'user-dashboard',
        component: UserDashboardComponent,
        children: [
          { path: '', component: DashboardTabComponent },
          { path: 'address', component: AddressTabComponent },
          { path: 'security', component: SecurityTabComponent },
          { path: 'card', component: CardTabComponent },
          { path: 'wish-list', component: WishListTabComponent },
          { path: 'order', component: OrderTabComponent },
          { path: 'profile', component: ProfileTabComponent },
        ]
      },
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
