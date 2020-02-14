import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextAlternativesComponent } from './text-alternatives/text-alternatives.component';


const routes: Routes = [
  {
    path: "textAlternatives",
    component: TextAlternativesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
