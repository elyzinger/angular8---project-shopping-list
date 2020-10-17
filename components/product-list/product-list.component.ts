import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { from } from 'rxjs';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

import {ProductService} from 'src/app/services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList: Product[] = []
  // count: number = this.productsList.length;  

  constructor(private productService: ProductService, private msg:MessengerService) { }

  deleteList(){
    this.productsList = [];
    // this.addProductToList('productName')
  }
  
  ngOnInit(): void {
    this.productsList  =  this.productService.getProuducts()
    this.msg.getMsg().subscribe(productName =>{
      this.addProductToList(productName)
    })
  }
  
  addProductToList(productName){
    
    this.productsList.push(new Product(this.productsList.length +1,productName,'',1))
    console.log(this.productsList)
}
  
}
