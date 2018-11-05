import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {MenuModule} from '../shared/components/menu/menu.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
