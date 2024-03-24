import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import titles from "../../../share/localization/fa.titles.json";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    const pageTitle = titles.signup;
    this.titleService.setTitle(pageTitle);
  }
}

