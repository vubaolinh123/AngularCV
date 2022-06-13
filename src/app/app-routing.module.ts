import { DangnhapComponent } from './components/client/dangnhap/dangnhap.component';
import { FormBlogComponent } from './components/admin/Blog/form-blog/form-blog.component';
import { ListBlogComponent } from './components/admin/Blog/list-blog/list-blog.component';
import { FormProjectComponent } from './components/admin/Projects/form-project/form-project.component';
import { DetalProjectComponent } from './components/client/detal-project/detal-project.component';
import { ProjectComponent } from './components/client/project/project.component';
import { ListProjectComponent } from './components/admin/Projects/list-project/list-project.component';
import { ListProfileComponent } from './components/admin/Profiles/list-profile/list-profile.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BlogComponent } from './components/client/blog/blog.component';
import { HomePageComponent } from './components/client/home-page/home-page.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

const routes: Routes = [
  {path: "", component: ClientLayoutComponent,
  children: [
          { path: '', component: HomePageComponent },
          { path: 'blog', component: BlogComponent },
           { path: 'project', component: ProjectComponent },
           { path: 'project/:id', component: DetalProjectComponent },
        ]},
    {path: "login", component: DangnhapComponent},
  {path: "admin", component: AdminLayoutComponent,
  children: [
      {path: "", component: ListProjectComponent},
      {path: "profile", component: ListProfileComponent},
      {path: "project", component: ListProjectComponent},
      {path: "project/add", component: FormProjectComponent},
      {path: "project/:id/edit", component: FormProjectComponent},
       {path: "blog", component: ListBlogComponent},
       {path: "blog/add", component: FormBlogComponent},
      {path: "blog/:id/edit", component: FormBlogComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
