import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {TableViewModule} from './table-view/table-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    DashboardModule,
    TableViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
