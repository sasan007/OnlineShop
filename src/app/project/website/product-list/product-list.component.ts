import {Component, OnInit, Renderer2} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  rating: number = 0;
  productArray: Product[] = [];
  jsFiles: string[] = [
    '../../assets/js/feather/feather-icon.js',
    '../../assets/js/slick/custom_slick.js',
    '../../assets/js/quantity-2.js',
    '../../assets/js/custom-wow.js',
    '../../assets/js/theme-setting.js'];

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
              private renderer: Renderer2,
              private route: ActivatedRoute) {
    this.loadScript(0);
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
    var products = this.productService.getProducts();
    products.forEach((product: Product) => {
      this.productArray.push(product);
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
}
