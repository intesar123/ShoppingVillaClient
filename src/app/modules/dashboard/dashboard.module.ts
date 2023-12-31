import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { MenusComponent } from './menus/menus.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddUserComponent,
    UserSettingsComponent,
    MenusComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
