import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product!: Product ;
  constructor(private route: ActivatedRoute,
              private productService:ProductService) {
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
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (!(Object.keys(params).length === 0 && params.constructor === Object)) {
        this.product = this.productService.getProductsById(params['productId'])[0];
        debugger
      }
    });
  }
}
