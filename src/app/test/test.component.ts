import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
active=true;
FirstName="Hanen";

dataList=[
  {name:"Hanen", code:165, country:"Tunisia"},
  {name:"Ahmed", code:998, country:"Qatar"},
  {name:"Hana", code:867, country:"France"}
]

name="Mousa";
  constructor(private route : Router){
  }
  
  back(){
    this.route.navigate(["/user"]);
  }
}
