import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { Product } from 'src/app/models/product';
import {ProductListComponent} from 'src/app/components/product-list/product-list.component'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  
  

  @Input()productItem: Product

  onAdd(){
    this.productItem.qty++
  }
  onDecrease(){
    if(this.productItem.qty > 1)
    this.productItem.qty--
  }
  onDelete(){
    
  }
  constructor(private productListComponent:ProductListComponent) { }


  deleteProductItem(Product){
    this.productListComponent.productsList.splice( this.productListComponent.productsList.indexOf(this.productItem), 1  )
  }
  ngOnInit(): void {
  }

}
