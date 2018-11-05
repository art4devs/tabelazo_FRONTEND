import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginModule} from './auth/login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {TableViewModule} from './table-view/table-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    DashboardModule,
    TableViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
