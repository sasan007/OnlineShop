import {Component} from '@angular/core';
import {BannerComponent} from "../banner/banner.component";
import {ProductComponent} from "../product/product.component";
import {NewsLetterComponent} from "../news-letter/news-letter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    ProductComponent,
    NewsLetterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() {

  }
}

