import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  public firstName="Hanen";
  public title="HELLO EVERYBODYY";
  //json
  public student={
    "Nom": "Hanen",
    "Prenom":"BenSalem"
  };
//Date
public myDate= new Date();
}
