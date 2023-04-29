import { publishFacade } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string
   {
    
  
    let str:string=value;
    

    const reversed = str.split("").reverse().join("");
    return reversed;
    
  }
}
