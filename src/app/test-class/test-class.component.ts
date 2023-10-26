import { Component } from '@angular/core';

@Component({
  selector: 'app-test-class',
  templateUrl: './test-class.component.html',
  styleUrls: ['./test-class.component.css']
})
export class TestClassComponent {
  tunisia=true;
  brazil=false;
  algeria=false;

  changeCountry(){
    this.tunisia=false;
    this.brazil=true;
    this.algeria=false;

  }
}
