import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardViewComponent} from './dashboard-view.component';
import {MenuModule} from '../shared/components/menu/menu.module';
import {ViewTitleModule} from '../shared/components/page-title/view-title.module';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule,
    MenuModule,
    ViewTitleModule
  ],
  exports: [DashboardViewComponent]
})
export class DashboardViewModule { }
