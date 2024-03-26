import {EventEmitter, Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import * as jsonData from '../share/sample-data/user-data.json';
import {UserCredential} from "../models/user-credential";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginSucceedEvent: EventEmitter<any> = new EventEmitter();
  logoutSucceedEvent: EventEmitter<any> = new EventEmitter();
  constructor(private cookieService: CookieService) {
  }
  login(user:UserCredential): void {
    this.cookieService.deleteAll();
    this.cookieService.set('profile', JSON.stringify(user));
  }
  logout(): void {
    this.cookieService.delete('profile');
  }
  getUser(): any {
    return jsonData;
  }

}
