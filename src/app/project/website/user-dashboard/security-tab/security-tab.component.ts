import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-security-tab',
  templateUrl: './security-tab.component.html',
  styleUrl: './security-tab.component.css'
})
export class SecurityTabComponent implements OnInit {
  ngOnInit(): void {
    var element = document.getElementById('pills-security-tab');
    if (element) {
      element.classList.add('active');
    }
  }
}
