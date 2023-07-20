import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { accountGuard } from 'src/app/services/account.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    { path: 'masters', loadChildren: () => import('./masters/masters.module').then(m => m.MastersModule) , canActivate:[accountGuard] },
    { path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    { path: 'user_settings', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate:[accountGuard] }
  ], canActivate:[accountGuard]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
