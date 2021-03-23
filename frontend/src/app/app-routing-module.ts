import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SiteComponent } from './views/site/site.component';
import { DataComponent } from './views/data/data.component';
// import { DashboardComponent } from './modules/dashboard/dashboard.component';
// import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
    {path: '', component: DefaultComponent, children: [
        {path:'', component:DashboardComponent},
        {path:'site', component: SiteComponent},
        {path:'data', component: DataComponent}
    ]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }