import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import titles from "../../../share/localization/fa.titles.json";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit{
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    const pageTitle = titles.about;
    this.titleService.setTitle(pageTitle);
  }
}
