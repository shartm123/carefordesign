import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SinglePostComponent} from "./single-post/single-post.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {path: 'post', component: PostComponent},
  {path: 'post/:id', component: SinglePostComponent},
  {path: '**', redirectTo: 'post', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
