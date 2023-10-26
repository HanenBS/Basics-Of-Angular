import { Component } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';


@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent {

  public data = [
    {
      name: "Test 1",
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
  ];
   

download_csvFile(){
  var options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: false,
    title: 'My title',
    useBom: true,
    headers: ["Name", "Age", "Average", "Approved", "Description"]
  };
 
new ngxCsv(this.data,"MyFirstCSV", options);


}
 

   
}
