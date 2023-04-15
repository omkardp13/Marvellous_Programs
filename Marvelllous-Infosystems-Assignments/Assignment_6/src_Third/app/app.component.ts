import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<input type="text" placeholder="Enter text here">
  <h1>marvellous infosystem</h1>`,
  styles: [`h1
  {
      color: blue;
  }`]
})
export class AppComponent {
  title = 'Assignment';
}
