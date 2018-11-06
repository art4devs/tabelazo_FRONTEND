import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeViewComponent} from './home-view/home-view.component';
import {LoginComponent} from './auth/login/login.component';
import {DashboardViewComponent} from './dashboard-view/dashboard-view.component';
import {TableViewComponent} from './table-view/table-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: DashboardViewComponent,
      },
      {
        path: 'tabelas',
        component: TableViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
