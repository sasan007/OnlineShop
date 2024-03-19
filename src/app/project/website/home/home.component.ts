import {AfterViewInit, Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  loadScript() {
    const script1 = this.renderer.createElement('script');
    const script2 = this.renderer.createElement('script');

    script1.src = '../../assets/js/timer1.js';
    script2.src = '../../assets/js/theme-setting.js';

    this.renderer.appendChild(document.body, script1);
    this.renderer.appendChild(document.body, script2);
  }

  constructor(private renderer: Renderer2) {

  }
  ngAfterViewInit(): void {
    this.loadScript();
  }
}

