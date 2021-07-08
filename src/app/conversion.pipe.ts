import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: any, targetUnit: string): any {
    switch(targetUnit){
      case 'km':
        return value ;
      case 'm':
        return value*1000 ;
      case 'cm':
        return value*1000*100 ;
      case 'mm':
        return value*1000*100*10 ;
      case 'ft':
        return value*3280.84 ;
      case 'in':
        return value*39370.1 ;
      case 'mi':
        return value*0.621371 ;
      case 'yd':
        return value*1093.61 ;
    } 
  }

}
