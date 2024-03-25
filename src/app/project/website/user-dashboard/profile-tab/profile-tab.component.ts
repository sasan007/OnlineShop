import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrl: './profile-tab.component.css'
})
export class ProfileTabComponent implements OnInit {
  user: any;
  fullName: any;
  constructor(private userService:UserService) {
  }
  ngOnInit(): void {
    var element = document.getElementById('pills-profile-tab');
    if (element) {
      element.classList.add('active');
    }
    this.user = this.userService.getUser();
    this.fullName=this.user.name + ' ' + this.user.lastName;
  }
}
