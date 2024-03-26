import {Injectable} from '@angular/core';
import * as productData from '../share/sample-data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): any {
    return productData.products;
  }

  getProductsBySearchParam(keyword: string): any {
    return productData.products.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
  }

  getProductsById(productId: number): any {
    return productData.products.filter(item => item.id == productId);
  }
}
