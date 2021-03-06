import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/views/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SiteComponent } from 'src/app/views/site/site.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent, 
    SiteComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule, 
    MatCardModule,
    MatGridListModule
  ]
})
export class DefaultModule { }
