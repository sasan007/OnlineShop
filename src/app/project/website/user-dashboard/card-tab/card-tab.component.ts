import {Component, OnInit} from '@angular/core';
import {Address, Card} from "../../../../models/user-credential";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-card-tab',
  templateUrl: './card-tab.component.html',
  styleUrl: './card-tab.component.css'
})
export class CardTabComponent implements OnInit {
  cardArray: Card[] = [];
  fullName: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    var element = document.getElementById('pills-card-tab');
    if (element) {
      element.classList.add('active');
    }
    var user = this.userService.getUser();
    this.fullName = user.name + ' ' + user.lastName;
    user.cards.forEach((card: Card) => {
      this.cardArray.push(card);
    });
  }
}
