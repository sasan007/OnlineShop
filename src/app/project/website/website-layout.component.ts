import {Component, Renderer2} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {UserService} from "../../services/user.service";
import {Basket} from "../../models/basket";
import {BasketService} from "../../services/basket.service";
import {toArray} from "rxjs";
import {BasketActionEnum} from "../../share/enums/basket-action-enum";

@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrl: './website-layout.component.css'
})
export class WebsiteLayoutComponent {
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
  userData: any;
  searchQuery: any;
  basket: Basket[] = [];
  totalPrice: number = 0;
  totalItem: number = 0;

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
      "../../assets/css/vendors/bootstrap.css",
      "../../assets/css/vendors/bootstrap.rtl.css",
      "../../assets/css/animate.min.css",
      "../../assets/css/vendors/font-awesome.css",
      "../../assets/css/vendors/feather-icon.css",
      "../../assets/css/vendors/slick/slick.css",
      "../../assets/css/vendors/slick/slick-theme.css",
      "../../assets/css/bulk-style.css",
      "../../assets/css/vendors/animate.css",
      "../../assets/css/style.css",
      "../../assets/css/custom.css",
      "../../assets/css/font.css"
    ];

    cssFiles.forEach(cssFile => {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'type', 'text/css');
      this.renderer.setAttribute(linkElement, 'href', cssFile);
      this.renderer.appendChild(document.head, linkElement);
    });
  }

  constructor(private renderer: Renderer2,
              private router: Router,
              private userService: UserService,
              private basketService: BasketService,
              private cookieService: CookieService) {
    this.loadCssFiles();
    this.loadScript(0);

  }

  ngOnInit() {
    this.getBasket();
    this.basketService.basketUpdatedEvent.subscribe(() => {
      this.getBasket();
    });
    this.userService.loginSucceedEvent.subscribe(data => {
      this.userData = data;
    });
    if (this.cookieService.check('profile')) {
      let userdata = JSON.parse(this.cookieService.get('profile'));
      if (userdata !== undefined) {
        this.userData = userdata;
      }
    }
  }


  private getBasket() {
    this.basket = this.basketService.getBasket();
    this.updateTotals();
  }

  private updateTotals() {
    this.totalItem = this.basket.length;
    this.totalPrice = this.basket.reduce((totalPrice, item) => totalPrice + (item.price * item.count), 0);
  }

  search() {
    const queryParams = {searchParam: this.searchQuery};
    this.router.navigate(['/product-list'], {queryParams});
  }

  logout() {
    this.userService.logout();
  }

  protected readonly toArray = toArray;
  deductFromBasket(productId: number) {
    this.basketService.removeProductFromBasket(productId);
  }
}
