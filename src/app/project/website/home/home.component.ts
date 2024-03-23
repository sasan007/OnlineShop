import {Component, OnInit} from '@angular/core';
import {BannerComponent} from "../banner/banner.component";
import {ProductComponent} from "../product/product.component";
import {NewsLetterComponent} from "../news-letter/news-letter.component";
import {Title} from "@angular/platform-browser";
import titles from "../../../share/localization/fa.titles.json";

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
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    const pageTitle = titles.home;
    this.titleService.setTitle(pageTitle);
  }
}

