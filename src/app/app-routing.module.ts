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
        ]},
  {path: "admin", component: AdminLayoutComponent,
  children: [
      {path: "", component: DashboardComponent},
      {path: "profile", component: ListProfileComponent},
      {path: "project", component: ListProjectComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
