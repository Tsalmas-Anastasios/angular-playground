import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './views/home/home-page.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => HomePageModule
      },

      {
        path: 'users',
        children: [
          {
            path: '',
            loadChildren: () => import('./views/users/list/users-list.module').then(m => m.UsersListModule)
          },
          {
            path: ':user_id',
            loadChildren: () => import('./views/users/details/user-details.module').then(m => m.UserDetailsModule)
          }
        ]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
