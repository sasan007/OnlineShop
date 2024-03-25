import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {Address} from "../../../../models/user-credential";

@Component({
  selector: 'app-address-tab',
  templateUrl: './address-tab.component.html',
  styleUrl: './address-tab.component.css'
})
export class AddressTabComponent implements OnInit {
  addressArray: Address[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    var element = document.getElementById('pills-address-tab');
    if (element) {
      element.classList.add('active');
    }
    var user = this.userService.getUser();
    user.addresses.forEach((address: Address) => {
      this.addressArray.push(address);
    });

  }
}
