import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(public eobj:ElementRef ) 
  {
   
  }
 
  @HostListener('mouseleave')mouseleave()
  {
    this.eobj.nativeElement.style.background='red';
  }

}
