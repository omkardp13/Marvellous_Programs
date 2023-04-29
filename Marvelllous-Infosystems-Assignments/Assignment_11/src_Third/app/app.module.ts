import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvellousCheckPipe } from './marvellous-check.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MarvellousCheckPipe,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
