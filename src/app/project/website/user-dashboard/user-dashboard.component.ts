import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {UserCredential} from "../../../models/user-credential";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  user: any;
  constructor(private router: Router, private userService: UserService) {}
  navigateToDashboardTab() {
    this.router.navigate(['/user-dashboard']);
  }

  navigateToOrderTab() {
    this.router.navigate(['/user-dashboard/order']);
  }

  navigateToSecurityTab() {
    this.router.navigate(['/user-dashboard/security']);
  }

  navigateToProfileTab() {
    this.router.navigate(['/user-dashboard/profile']);
  }

  navigateToAddressTab() {
    this.router.navigate(['/user-dashboard/address']);
  }

  navigateToCardTab() {
    this.router.navigate(['/user-dashboard/card']);
  }

  navigateToWishListTab() {
    this.router.navigate(['/user-dashboard/wish-list']);
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();

  }
}
