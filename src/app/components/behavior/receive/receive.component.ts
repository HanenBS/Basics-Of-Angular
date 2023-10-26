import { Component } from '@angular/core';
import { BehaviorService } from 'src/app/services/behavior.service';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent {

  receivedName:string='';

  constructor(private behaviorServide: BehaviorService){
    this.behaviorServide.getName().subscribe(resultName =>{
      //console.log('result name from recieve : ',resultName)
      this.receivedName = resultName;
    });
  }
}
