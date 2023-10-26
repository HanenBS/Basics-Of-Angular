import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
name="Hanen"; //attribut
status="ON"; //fonction
msg: string = '';
tableDate: { productName: string; productQuantity: number; productPrice: number; }[] = []; 
public userList: any[]=[];

constructor(private route : Router, 
            private userService : UserService){
              this.getUser();
  }
/*
constructor(private route:Router, private productService:ProductService){
this.getProduct();
}

getProduct(){
  this.tableDate=this.productService.productTable;
}
*/
getStatus(){
return this.status;
}

getMessage(){
  console.log("My new message");
}

goToRegisterTest(){
  this.route.navigate(["/test"]);
}

getUser(){
  this.userService.getUserFromPlaceholder().subscribe(
    result =>{
      this.userList = result;
      console.log(result);
    }
  );
}
}
