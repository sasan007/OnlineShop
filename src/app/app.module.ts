import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "./project/website/home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {WebsiteLayoutComponent} from "./project/website/website-layout.component";
import {RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {ProductsComponent} from "./project/backoffice/products/products.component";
import {BackOfficeLayoutComponent} from "./project/backoffice/back-office-layout.component";
import {DashboardComponent} from "./project/backoffice/dashboard/dashboard.component";
import {AboutUsComponent} from "./project/website/about-us/about-us.component";
import {BannerComponent} from "./project/website/banner/banner.component";
import {ContactUsComponent} from "./project/website/contact-us/contact-us.component";
import {LoginComponent} from "./project/website/login/login.component";
import {NewsLetterComponent} from "./project/website/news-letter/news-letter.component";
import {NotFoundComponent} from "./project/website/not-found/not-found.component";
import {ProductComponent} from "./project/website/product/product.component";
import {SideBarComponent} from "./project/backoffice/side-bar/side-bar.component";
import {SignUpComponent} from "./project/website/sign-up/sign-up.component";
import {FormsModule} from "@angular/forms";
import { UserDashboardComponent } from './project/website/user-dashboard/user-dashboard.component';
import { DashboardTabComponent } from './project/website/user-dashboard/dashboard-tab/dashboard-tab.component';
import { WishListTabComponent } from './project/website/user-dashboard/wish-list-tab/wish-list-tab.component';
import { OrderTabComponent } from './project/website/user-dashboard/order-tab/order-tab.component';
import { CardTabComponent } from './project/website/user-dashboard/card-tab/card-tab.component';
import { ProfileTabComponent } from './project/website/user-dashboard/profile-tab/profile-tab.component';
import { SecurityTabComponent } from './project/website/user-dashboard/security-tab/security-tab.component';
import { AddressTabComponent } from './project/website/user-dashboard/address-tab/address-tab.component';
import { ProductListComponent } from './project/website/product-list/product-list.component';
import { ProductDetailComponent } from './project/website/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackOfficeLayoutComponent,
    DashboardComponent,
    ProductsComponent,
    AboutUsComponent,
    BannerComponent,
    ContactUsComponent,
    LoginComponent,
    NewsLetterComponent,
    NotFoundComponent,
    ProductComponent,
    SideBarComponent,
    SignUpComponent,
    WebsiteLayoutComponent,
    UserDashboardComponent,
    DashboardTabComponent,
    WishListTabComponent,
    OrderTabComponent,
    CardTabComponent,
    ProfileTabComponent,
    SecurityTabComponent,
    AddressTabComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgIf,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
