import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() public nameFromParent: string = '';
 @Output() public childEvent = new EventEmitter<string>();


  public eventChild(){
      this.childEvent.emit("Message from child to parent");
  }
}
