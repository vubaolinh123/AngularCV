import { BlogComponent } from './components/client/blog/blog.component';
import { HomePageComponent } from './components/client/home-page/home-page.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: ClientLayoutComponent,
  children: [
          { path: '', component: HomePageComponent },
          { path: 'blog', component: BlogComponent },
        ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
