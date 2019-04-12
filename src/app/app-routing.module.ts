import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:"",redirectTo:"/landing",pathMatch:"full"},
  {path:"landing",component:LandingComponent ,
  children:[{path:"blog",component:BloglistComponent,
  data:{displayTextChanged:"inside Router",displayText:"inside Router",} }]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
