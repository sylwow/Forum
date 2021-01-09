import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogwowComponent } from './blogwow/blogwow.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'blogwow', component: BlogwowComponent },
  { path: '',   component: MainComponent, pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
