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
    WebsiteLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    NgIf,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
