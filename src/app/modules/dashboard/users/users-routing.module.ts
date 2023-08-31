import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from 'src/app/account/user-profile/user-profile.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { accountGuard } from 'src/app/services/account.guard';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import { RolesComponent } from './roles/roles.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { MenusComponent } from '../menus/menus.component';

const routes: Routes = [{ path: '', component: UsersComponent },
{ path: 'user_profile', component: UserProfileComponent, canActivate:[accountGuard] },
    { path: 'add_user', component: AddUserComponent, canActivate:[accountGuard] },
    { path: 'users', component: UserSettingsComponent, canActivate:[accountGuard] },
    { path: 'edit_user', component: AddUserComponent, canActivate:[accountGuard] },
    { path: 'roles', component: RolesComponent, canActivate:[accountGuard] },
    { path: 'add_role', component: AddRoleComponent, canActivate:[accountGuard] },
    { path: 'menus', component: MenusComponent, canActivate:[accountGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
