import {EventEmitter, Injectable} from '@angular/core';
import {BasketActionEnum} from "../share/enums/basket-action-enum";
import {CookieService} from "ngx-cookie-service";
import {Basket} from "../models/basket";
import {ProductService} from "./product.service";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketUpdatedEvent: EventEmitter<void> = new EventEmitter<void>();
  basket: Basket[] = [];

  constructor(private cookieService: CookieService,
              private productService: ProductService) {
  }

  updateBasket(productId: number, action: BasketActionEnum) {
    let [product] = this.productService.getProductsById(productId);
    if (!product)
      return;
    if (action === BasketActionEnum.Increment) {
      this.increaseItem(product);
    } else if (action === BasketActionEnum.Decrement) {
      this.decreaseItem(product);
    }
    this.basketUpdatedEvent.emit();
  }

  removeProductFromBasket(productId: number) {
    if (!this.cookieService.check('basket'))
      return;
    else {
      this.basket = JSON.parse(this.cookieService.get('basket'));
      const existingItemIndex = this.basket.findIndex(item => item.productId === productId);
      if (existingItemIndex !== -1) {
        this.basket.splice(existingItemIndex, 1);
      }
    }
    this.cookieService.set('basket', JSON.stringify(this.basket), 30);
    this.basketUpdatedEvent.emit();
  }

  getBasket() {
    if (!this.cookieService.check('basket')) {
      this.cookieService.set('basket', JSON.stringify(this.basket), 30);
      this.basket = JSON.parse(this.cookieService.get('basket'));
    } else {
      this.basket = JSON.parse(this.cookieService.get('basket'));
    }
    return this.basket;
  }

  getBasketByProductId(productId: number): any {
    if (!this.cookieService.check('basket')) {
      return;
    } else {
      this.basket = JSON.parse(this.cookieService.get('basket'));
      if (this.basket.findIndex(item => item.productId == productId) !== -1)
        return this.basket.find(item => item.productId == productId);
    }
  }

  private increaseItem(product: Product) {
    if (!this.cookieService.check('basket')) {
      this.cookieService.set('basket', JSON.stringify(this.basket), 30);
      this.basket = JSON.parse(this.cookieService.get('basket'));
      let basket: Basket = {
        productId: product.id,
        productName: product.name,
        pic: product.pic,
        price: product.price,
        count: 1
      };
      this.basket.push(basket);
    } else {
      this.basket = JSON.parse(this.cookieService.get('basket'));
      const existingItemIndex = this.basket.findIndex(item => item.productId === product.id);
      if (existingItemIndex !== -1) {
        this.basket[existingItemIndex].count++;
      } else {
        let newBasketItem: Basket = {
          productId: product.id,
          productName: product.name,
          pic: product.pic,
          price: product.price,
          count: 1
        };
        this.basket.push(newBasketItem);
      }
    }
    this.cookieService.set('basket', JSON.stringify(this.basket), 30);
  }

  private decreaseItem(product: Product) {
    if (!this.cookieService.check('basket'))
      return;
    else {
      this.basket = JSON.parse(this.cookieService.get('basket'));
      const existingItemIndex = this.basket.findIndex(item => item.productId === product.id);
      if (existingItemIndex !== -1) {
        if (this.basket[existingItemIndex].count > 1)
          this.basket[existingItemIndex].count--;
        else
          this.basket.splice(existingItemIndex, 1);
      }
    }
    this.cookieService.set('basket', JSON.stringify(this.basket), 30);
  }
}
