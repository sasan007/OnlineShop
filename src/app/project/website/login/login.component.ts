import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import titles from '../../../share/localization/fa.titles.json';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    const pageTitle = titles.login;
    this.titleService.setTitle(pageTitle);
  }
}
