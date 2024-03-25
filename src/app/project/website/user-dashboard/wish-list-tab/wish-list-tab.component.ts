import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wish-list-tab',
  templateUrl: './wish-list-tab.component.html',
  styleUrl: './wish-list-tab.component.css'
})
export class WishListTabComponent implements OnInit {
  ngOnInit(): void {
    var element = document.getElementById('pills-wishlist-tab');
    if (element) {
      element.classList.add('active');
    }
  }
}
