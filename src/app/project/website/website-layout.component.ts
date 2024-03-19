import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-website-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './website-layout.component.html',
  styleUrl: './website-layout.component.css'
})
export class WebsiteLayoutComponent {

}