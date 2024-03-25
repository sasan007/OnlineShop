import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-tab',
  templateUrl: './order-tab.component.html',
  styleUrl: './order-tab.component.css'
})
export class OrderTabComponent implements OnInit {
  ngOnInit(): void {
    var element = document.getElementById('pills-order-tab');
    if (element) {
      element.classList.add('active');
    }
  }
}
