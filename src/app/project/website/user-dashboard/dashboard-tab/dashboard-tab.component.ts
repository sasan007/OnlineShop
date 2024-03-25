import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {Address} from "../../../../models/user-credential";

@Component({
  selector: 'app-dashboard-tab',
  templateUrl: './dashboard-tab.component.html',
  styleUrl: './dashboard-tab.component.css'
})
export class DashboardTabComponent implements OnInit {
  fullName: any;
  user: any;
  addressArray: Address[] = [];
  constructor(private userService:UserService) {
  }
  ngOnInit(): void {
    var element = document.getElementById('pills-dashboard-tab');
    if (element) {
      element.classList.add('active');
    }
    this.user = this.userService.getUser();
    this.fullName=this.user.name + ' ' + this.user.lastName;

    this.user.addresses.forEach((address: Address) => {
      this.addressArray.push(address);
    });
  }
}
