import {NgModule} from '@angular/core';
import {HomeViewComponent} from './home-view.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [HomeViewComponent],
  exports: [HomeViewComponent],
  imports: [CommonModule],
})
export class HomeViewModule { }
