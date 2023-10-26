import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorService } from 'src/app/services/behavior.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent {
yourName: string='';
yourPhone:string='';
constructor(private behaviorService : BehaviorService){

}
sendName(form: NgForm){
 // console.log('Name',this.yourName);
 this.behaviorService.setName(this.yourName);
}
onKeyDown(event: KeyboardEvent):void{
  const forbiddenkeys = ['.',',','+','-','_','*'];
  if (forbiddenkeys.includes(event.key)){
    event.preventDefault();
  }
}
}
