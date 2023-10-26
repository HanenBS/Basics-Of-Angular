import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productTable=[
    {productName : "Orange", productQuantity: 5,productPrice : 20},
    {productName : "Banane", productQuantity: 15,productPrice : 40},
    {productName : "PineApple", productQuantity: 10,productPrice : 25},

  ]

  constructor() { }
}
