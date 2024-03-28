import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
  viewChildren
} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product";
import {ActivatedRoute} from "@angular/router";
import {BasketActionEnum} from "../../../share/enums/basket-action-enum";
import {Basket} from "../../../models/basket";
import {BasketService} from "../../../services/basket.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  @ViewChildren('cardQuantity') cardQuantities!: QueryList<ElementRef>;
  rating: number = 0;
  productArray: Product[] = [];
  jsFiles: string[] = [
    '../../assets/js/feather/feather-icon.js',
    '../../assets/js/slick/custom_slick.js',
    '../../assets/js/quantity-2.js',
    '../../assets/js/custom-wow.js',
    '../../assets/js/theme-setting.js'];
  basket: Basket[] = [];
  orderCount: number = 0;

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

  trackByFn(index: number) {
    return index;
  }

  constructor(private productService: ProductService,
              private basketService: BasketService,
              private renderer: Renderer2,
              private route: ActivatedRoute) {
    this.loadScript(0);
  }

  addOpenClass(productId: number) {
    const selectedElement = this.cardQuantities.find(itemRef => itemRef.nativeElement.getAttribute('data-index') === productId.toString())?.nativeElement;
    const hasOpenClass = selectedElement.classList.contains('open');
    if (!hasOpenClass) {
      this.renderer.addClass(selectedElement, 'open');
    }
  }

  removeOpenClass(productId: number) {
    const selectedElement = this.cardQuantities.find(itemRef => itemRef.nativeElement.getAttribute('data-index') === productId.toString())?.nativeElement;
    const hasOpenClass = selectedElement.classList.contains('open');
    if (hasOpenClass) {
      this.renderer.removeClass(selectedElement, 'open');
    }
  }

  getFullStarArray(rating: number): { fill: boolean }[] {
    const filledStars = Math.floor(rating);
    const stars: { fill: boolean }[] = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push({fill: true});
    }
    return stars;
  }

  getQuantity(productId: number): any {
    const product = this.basket.find(item => item.productId === productId);
    return product ? product.count : 'افزودن';
  }

  getEmptyStarArray(rating: number): { fill: boolean }[] {
    const filledStars = Math.floor(rating);
    const stars: { fill: boolean }[] = [];

    for (let i = 0; i < 5 - filledStars; i++) {
      stars.push({fill: false});
    }
    return stars;
  }

  ngOnInit(): void {
    var products = this.productService.getProducts();
    products.forEach((product: Product) => {
      this.productArray.push(product);
    });
    this.basket = this.basketService.getBasket();
    this.basketService.basketUpdatedEvent.subscribe(() => {
      this.basket = this.basketService.getBasket();
    });
    this.route.queryParams.subscribe(params => {
      if (!(Object.keys(params).length === 0 && params.constructor === Object)) {
        this.productArray = [];
        var products = this.productService.getProductsBySearchParam(params['searchParam']);
        products.forEach((product: Product) => {
          this.productArray.push(product);
        });
      }
      this.loadScript(0);

    });
  }

  addToBasket(id: number) {
    if (this.basket.findIndex(item => item.productId == id) === -1) {
      this.addOpenClass(id)
    }
    this.basketService.updateBasket(id, BasketActionEnum.Increment);
  }

  deductFromBasket(id: number) {
    if (this.basket.findIndex(item => item.productId == id && item.count === 1) !== -1) {
      this.removeOpenClass(id)
    }
    this.basketService.updateBasket(id, BasketActionEnum.Decrement);
  }
}
