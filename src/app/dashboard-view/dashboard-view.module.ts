import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardViewComponent} from './dashboard-view.component';
import {MenuModule} from '../shared/components/menu/menu.module';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [DashboardViewComponent]
})
export class DashboardViewModule { }
