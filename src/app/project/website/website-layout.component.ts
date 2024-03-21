import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-website-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf
  ],
  templateUrl: './website-layout.component.html',
  styleUrl: './website-layout.component.css'
})
export class WebsiteLayoutComponent implements AfterViewInit {
  @ViewChild('loader') loader!: ElementRef;
  jsFiles: string[] = [
    '../../assets/js/jquery-3.6.0.min.js',
    '../../assets/js/jquery-ui.min.js',
    '../../assets/js/bootstrap/bootstrap.bundle.min.js',
    '../../assets/js/bootstrap/bootstrap-notify.min.js',
    '../../assets/js/bootstrap/popper.min.js',
    '../../assets/js/feather/feather.min.js',
    '../../assets/js/feather/feather-icon.js',
    '../../assets/js/lazysizes.min.js',
    '../../assets/js/slick/slick.js',
    '../../assets/js/slick/slick-animation.min.js',
    '../../assets/js/slick/custom_slick.js',
    '../../assets/js/auto-height.js',
    '../../assets/js/timer1.js',
    '../../assets/js/fly-cart.js',
    '../../assets/js/quantity-2.js',
    '../../assets/js/wow.min.js',
    '../../assets/js/custom-wow.js',
    '../../assets/js/script.js',
    '../../assets/js/theme-setting.js'];
  isLoaderShow: any = true;

  loadScript(index: number) {
    if (index < this.jsFiles.length) {
      const script = this.renderer.createElement('script');
      script.src = this.jsFiles[index];

      script.onload = () => {
        this.loadScript(index + 1);
      };

      this.renderer.appendChild(document.body, script);
    }
  }

  constructor(private renderer: Renderer2) {

  }

  ngAfterViewInit(): void {
    this.loadScript(0);
    this.isLoaderShow = false;
  }
}
