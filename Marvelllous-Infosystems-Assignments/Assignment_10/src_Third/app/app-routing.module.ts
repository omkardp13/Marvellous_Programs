import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';

//{ path:'first',component:FirstComponent }
const routes: Routes = [
{path:'tech',component:TechnologiesComponent},
{path:'book',component:BooksComponent},
{ path:'',component:TechnologiesComponent } ,
{ path:'**',component:WrongChoiceComponent }//default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
