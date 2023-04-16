import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component
 {
       public isPrime:boolean=false;
       public msg="";
      constructor(public obj:NumberService)
      {
          this.isPrime=this.obj.CheckPrime(11);  
          
          if(this.isPrime)
          {
              this.msg="This is Prime Number";
          }
          else
          {
            this.msg="This is Not Prime Number";
          }
      }
    }

      
