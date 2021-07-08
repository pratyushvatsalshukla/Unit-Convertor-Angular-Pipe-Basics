import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit-convertor';
  getKm:number = 0 ;
  unit:string = '' ;
      
  getValue(val:any){
    this.getKm = parseFloat(val.target.value) ;
  }

  getUnit(val:any){
    this.unit = val.target.value ;
  }

}