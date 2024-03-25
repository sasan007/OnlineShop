import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import titles from '../../../share/localization/fa.titles.json';
import {NgForm} from "@angular/forms";
import {UserCredential} from "../../../models/user-credential";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  emailOrPhoneNumberIsExist: boolean = false;
  submitButtonCaption = 'ورود';

  userCredential: string = "";
  userConfirmation: string = "";

  constructor(private titleService: Title,
              private toastr: ToastrService,
              private userService: UserService,
              private router: Router) {

  }

  ngOnInit() {
    const pageTitle = titles.login;
    this.titleService.setTitle(pageTitle);
  }

  onSubmit(form: NgForm) {
    let user: UserCredential;
    const phoneNumberPattern = /^09\d{9}$/;
    const emailPattern = /^\S+@\S+\.\S+$/;
    user = this.userService.getUser();

    if (phoneNumberPattern.test(this.userCredential)) {
      if (user.phoneNumber === this.userCredential) {
        this.submitButtonCaption = 'تایید';
        this.emailOrPhoneNumberIsExist = true;
      } else {
        this.toastr.error('شماره موبایل وارد شده صحیح نیست', '', {
          positionClass: 'toast-bottom-right'
        });
      }

    } else if (emailPattern.test(this.userCredential)) {
      if (user.email === this.userCredential) {
        this.submitButtonCaption = 'تایید';
        this.emailOrPhoneNumberIsExist = true;
      } else {
        this.toastr.error('ایمیل وارد شده صحیح نیست', '', {
          positionClass: 'toast-bottom-right'
        });
      }

    } else {
      this.toastr.error('فرمت وارد شده صحیح نمی باشد', '', {
        positionClass: 'toast-bottom-right'
      });
    }
    if (this.userConfirmation.length > 2) {
      if (user.password === this.userConfirmation) {
        this.router.navigate(['/user-dashboard']);
        this.userService.login(user);
        this.userService.loginSucceedEvent.emit(user);

      } else {
        this.toastr.error('رمز عبور اشتباه است', '', {
          positionClass: 'toast-bottom-right'
        });
      }
    }
  }
}
