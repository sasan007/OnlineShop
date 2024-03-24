import {Component, Renderer2} from '@angular/core';
import {SideBarComponent} from "./side-bar/side-bar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-back-office-layout',
  templateUrl: './back-office-layout.component.html',
  styleUrl: './back-office-layout.component.css'
})
export class BackOfficeLayoutComponent {
  jsFiles: string[] = [
    "../../assets/back/js/jquery-3.6.0.min.js",
      "../../assets/back/js/bootstrap/bootstrap.bundle.min.js",
      "../../assets/back/js/icons/feather-icon/feather.min.js",
      "../../assets/back/js/icons/feather-icon/feather-icon.js",
      "../../assets/back/js/scrollbar/simplebar.js",
      "../../assets/back/js/scrollbar/custom.js",
      "../../assets/back/js/config.js",
      "../../assets/back/js/tooltip-init.js",
      "../../assets/back/js/sidebar-menu.js",
      "../../assets/back/js/notify/bootstrap-notify.min.js",
      "../../assets/back/js/notify/index.js",
      "../../assets/back/js/chart/apex-chart/apex-chart1.js",
      "../../assets/back/js/chart/apex-chart/moment.min.js",
      "../../assets/back/js/chart/apex-chart/apex-chart.js",
      "../../assets/back/js/chart/apex-chart/stock-prices.js",
      "../../assets/back/js/chart/apex-chart/chart-custom1.js",
      "../../assets/back/js/slick.min.js",
      "../../assets/back/js/custom-slick.js",
      "../../assets/back/js/customizer.js",
      "../../assets/back/js/ratio.js",
      "../../assets/back/js/sidebareffect.js",
      "../../assets/back/js/script.js"];

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

  loadCssFiles(): void {
    const cssFiles = [
      '../../assets/back/css/linearicon.css',
      '../../assets/back/css/vendors/font-awesome.css',
      '../../assets/back/css/vendors/themify.css',
      '../../assets/back/css/ratio.css',
      '../../assets/back/css/remixicon.css',
      '../../assets/back/css/vendors/feather-icon.css',
      '../../assets/back/css/vendors/scrollbar.css',
      '../../assets/back/css/vendors/animate.css',
      '../../assets/back/css/vendors/bootstrap.css',
      '../../assets/back/css/vector-map.css',
      '../../assets/back/css/vendors/slick.css',
      '../../assets/back/css/style.css',
      '../../assets/back/css/font.css',
      '../../assets/back/css/custom.css'
    ];

    cssFiles.forEach(cssFile => {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'type', 'text/css');
      this.renderer.setAttribute(linkElement, 'href', cssFile);
      this.renderer.appendChild(document.head, linkElement);
    });
  }

  constructor(private renderer: Renderer2) {
    this.loadCssFiles();
    this.loadScript(0);

  }

}
