import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import titles from '../../../share/localization/fa.titles.json';
import {NgForm} from "@angular/forms";
import {UserCredential} from "./models/user-credential";

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
  })
  export class LoginComponent implements OnInit {
    emailOrPhoneNumberIsExist: boolean = false;

    userCredential: UserCredential = {
      userKey: '',
    password: ''
  };
  constructor(private titleService: Title) {

  }

  ngOnInit() {
    const pageTitle = titles.login;
    this.titleService.setTitle(pageTitle);
  }

  onSubmit(form: NgForm) {
    const phoneNumberPattern = /^09\d{9}$/; // Phone number pattern: 09*********
    const emailPattern = /^\S+@\S+\.\S+$/; // Phone number pattern: 09*********
    if (phoneNumberPattern.test(this.userCredential.userKey)) {
      console.log("not correct")
    }
    else if (emailPattern.test(this.userCredential.userKey)) {
      console.log("not correct")
    }
    else {
    }
    this.emailOrPhoneNumberIsExist = true;
    form.ngSubmit.emit();
  }
}
