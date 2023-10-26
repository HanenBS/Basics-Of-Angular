import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 public login : Login;
 confirmPass: any;
 constructor(){
  this.login = new Login();
 }
 onSubmit(form : NgForm){
  console.log(this.login);
 }
}
