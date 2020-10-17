import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Product} from '../models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    // new Product (0,'milk', '',1),
    // new Product (1,'appple', '',1),
    // new Product (2,'orange', '',1),
    // new Product (3,'zero', '',1),
    // new Product (4,'cheese', '',1),
  ]

  constructor() { }
  
  getProuducts(): Product[]{
    // this.products.push(new Product(1,' ','',1))
    return this.products
      
  }
}

