import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component
 {
       public isPrime:boolean=false;
       public msg="";
       public CountCapital:number=0;

      constructor(public obj:NumberService,public objs:StringService)
      {
          this.isPrime=this.obj.CheckPrime(17);  
          
          if(this.isPrime)
          {
              this.msg="This is Prime Number";
          }
          else
          {
            this.msg="This is Not Prime Number";
          }

          this.CountCapital=this.objs.CountCapital("ONkAR");


      }
    }

      
