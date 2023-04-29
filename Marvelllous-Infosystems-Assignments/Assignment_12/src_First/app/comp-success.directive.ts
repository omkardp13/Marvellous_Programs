import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  
  constructor(public eobj:ElementRef ) 
  {
   
  }

  @HostListener('mouseenter')mouseenter()
  {
    this.eobj.nativeElement.style.background='green';
  }
 

}
