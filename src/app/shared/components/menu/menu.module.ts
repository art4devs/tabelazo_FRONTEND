import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {NavbarModule} from './navbar/navbar.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, NavbarModule],
  exports: [MenuComponent]
})
export class MenuModule { }
