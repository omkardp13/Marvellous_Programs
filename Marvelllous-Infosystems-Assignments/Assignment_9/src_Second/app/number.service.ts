import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }


  public CheckPrime(No1:number):boolean
  {
    var isPrime=true;
        for(var i:number=2;i<No1;i++)
        {
           if(No1%2==0)
           {
            isPrime=false;
            break;
           }
          
        }
        return isPrime;
  }
}
