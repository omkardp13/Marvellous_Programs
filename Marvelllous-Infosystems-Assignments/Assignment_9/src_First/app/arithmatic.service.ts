import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  public DoAddition(No1:number,No2:number):number
  {
     return No1+No2;
  }


  public DoSubstraction(No1:number,No2:number):number
  {
     return No1-No2;
  }

  constructor() 
  { 

  }
}
