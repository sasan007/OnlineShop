import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {BasketService} from "../../../services/basket.service";
import {BasketActionEnum} from "../../../share/enums/basket-action-enum";
import {Basket} from "../../../models/basket";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  itemInBasket!: Basket;
  orderCount: number = 0;
  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private basketService: BasketService) {
  }

  trackByFn(index: number) {
    return index;
  }

  getFullStarArray(rating: number): { fill: boolean }[] {
    const filledStars = Math.floor(rating);
    const stars: { fill: boolean }[] = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push({fill: true});
    }
    return stars;
  }

  getEmptyStarArray(rating: number): { fill: boolean }[] {
    const filledStars = Math.floor(rating);
    const stars: { fill: boolean }[] = [];

    for (let i = 0; i < 5 - filledStars; i++) {
      stars.push({fill: false});
    }
    return stars;
  }
  private getProductFromBasket() {
    this.itemInBasket = this.basketService.getBasketByProductId(this.product.id);
    this.orderCount = this.itemInBasket ? this.itemInBasket.count : 0;
  }
  ngOnInit(): void {
    this.basketService.basketUpdatedEvent.subscribe(() => {
      this.getProductFromBasket();
    });
    this.route.queryParams.subscribe(params => {
      if (!(Object.keys(params).length === 0 && params.constructor === Object)) {
        this.product = this.productService.getProductsById(params['productId'])[0];
        this.getProductFromBasket();
      }
    });
  }

  addToBasket(id: number) {
    this.basketService.updateBasket(id, BasketActionEnum.Increment);
  }

  deductFromBasket(id: number) {
    this.basketService.updateBasket(id, BasketActionEnum.Decrement);
  }
}
