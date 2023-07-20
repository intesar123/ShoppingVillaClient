import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from './masters.component';
import { accountGuard } from 'src/app/services/account.guard';

const routes: Routes = [{ path: '', component: MastersComponent, canActivate:[accountGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
