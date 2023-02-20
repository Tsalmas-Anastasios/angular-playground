import { UsersListComponent } from './list/users-list.component';
import { UserDetailsComponent } from './details/user-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: ':user_id',
    component: UserDetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }