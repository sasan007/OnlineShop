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
    const script3 = this.renderer.createElement('script');
    const script4 = this.renderer.createElement('script');
    const script5 = this.renderer.createElement('script');
    const script6 = this.renderer.createElement('script');
    const script7 = this.renderer.createElement('script');
    const script8 = this.renderer.createElement('script');
    const script9 = this.renderer.createElement('script');
    const script10 = this.renderer.createElement('script');
    const script11 = this.renderer.createElement('script');
    const script12 = this.renderer.createElement('script');
    const script13 = this.renderer.createElement('script');
    const script14 = this.renderer.createElement('script');
    const script15 = this.renderer.createElement('script');
    const script16 = this.renderer.createElement('script');
    const script17 = this.renderer.createElement('script');
    const script18 = this.renderer.createElement('script');
    const script19 = this.renderer.createElement('script');

    script1.src = '../../assets/js/jquery-3.6.0.min.js';
    script2.src = '../../assets/js/jquery-ui.min.js';
    script3.src = '../../assets/js/bootstrap/bootstrap.bundle.min.js';
    script4.src = '../../assets/js/bootstrap/bootstrap-notify.min.js';
    script5.src = '../../assets/js/bootstrap/popper.min.js';
    script6.src = '../../assets/js/feather/feather.min.js';
    script7.src = '../../assets/js/feather/feather-icon.js';
    script8.src = '../../assets/js/lazysizes.min.js';
    script9.src = '../../assets/js/slick/slick.js';
    script10.src = '../../assets/js/slick/slick-animation.min.js';
    script11.src = '../../assets/js/slick/custom_slick.js';
    script12.src = '../../assets/js/auto-height.js';
    script13.src = '../../assets/js/timer1.js';
    script14.src = '../../assets/js/fly-cart.js';
    script15.src = '../../assets/js/quantity-2.js';
    script16.src = '../../assets/js/wow.min.js';
    script17.src = '../../assets/js/custom-wow.js';
    script18.src = '../../assets/js/script.js';
    script19.src = '../../assets/js/theme-setting.js';

    // this.renderer.appendChild(document.body, script1);
    // this.renderer.appendChild(document.body, script2);
    this.renderer.appendChild(document.body, script3);
    this.renderer.appendChild(document.body, script4);
    this.renderer.appendChild(document.body, script5);
    this.renderer.appendChild(document.body, script6);
    this.renderer.appendChild(document.body, script7);
    this.renderer.appendChild(document.body, script8);
    this.renderer.appendChild(document.body, script9);
    this.renderer.appendChild(document.body, script10);
    this.renderer.appendChild(document.body, script11);
    this.renderer.appendChild(document.body, script12);
    this.renderer.appendChild(document.body, script13);
    this.renderer.appendChild(document.body, script14);
    this.renderer.appendChild(document.body, script15);
    this.renderer.appendChild(document.body, script16);
    this.renderer.appendChild(document.body, script17);
    this.renderer.appendChild(document.body, script18);
    this.renderer.appendChild(document.body, script19);
  }

  constructor(private renderer: Renderer2) {

  }
  ngAfterViewInit(): void {
    this.loadScript();
  }
}

