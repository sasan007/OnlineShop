import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import titles from "../../../share/localization/fa.titles.json";

@Component({
  selector: 'app-home',
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

