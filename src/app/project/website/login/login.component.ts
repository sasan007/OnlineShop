import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import titles from '../../../share/localization/fa.titles.json';
import {NgForm} from "@angular/forms";
import {UserCredential} from "./models/user-credential";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  emailOrPhoneNumberIsExist: boolean = false;
  submitButtonCaption = 'ورود';

  userCredential: UserCredential = {
    userKey: '',
    password: ''
  };

  constructor(private titleService: Title, private toastr: ToastrService) {

  }

  ngOnInit() {
    const pageTitle = titles.login;
    this.titleService.setTitle(pageTitle);
  }

  onSubmit(form: NgForm) {
    const phoneNumberPattern = /^09\d{9}$/; // Phone number pattern: 09*********
    const emailPattern = /^\S+@\S+\.\S+$/; // Phone number pattern: 09*********
    if (phoneNumberPattern.test(this.userCredential.userKey)) {
      this.submitButtonCaption = 'تایید';
      this.emailOrPhoneNumberIsExist = true;

    } else if (emailPattern.test(this.userCredential.userKey)) {
      this.submitButtonCaption = 'تایید';
      this.emailOrPhoneNumberIsExist = true;

    } else {
      this.toastr.error('فرمت وارد شده صحیح نمی باشد', '', {
        positionClass: 'toast-bottom-right'
      });
    }
    if (this.userCredential.password.length > 2)
      this.toastr.success('خوش آمدید', '', {
        positionClass: 'toast-bottom-right'
      });
    form.ngSubmit.emit();
  }
}
