import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginModule} from './auth/login/login.module';
import {DashboardViewModule} from './dashboard-view/dashboard-view.module';
import {TableViewModule} from './table-view/table-view.module';
import {AppRoutingModule} from './app.routing.module';
import {HomeViewModule} from './home-view/home-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeViewModule,
    LoginModule,
    DashboardViewModule,
    TableViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
