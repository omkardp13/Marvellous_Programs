import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component
 {
        public CountCapital:number=0;
           constructor(public objs:StringService)
           {
              this.CountCapital=this.objs.CountCapital("ONkaR");
              console.log(this.CountCapital);
           }
}
