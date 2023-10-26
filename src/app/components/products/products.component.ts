import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  table: { productName: string; productQuantity: number; productPrice: number; }[] = []; 

constructor(private productService :ProductService){
  this.getProduct();
}

getProduct(){
  this.table= this.productService.productTable;
  console.log("my product", this.table);
}
}
