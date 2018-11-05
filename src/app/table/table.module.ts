import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableComponent} from './table.component';
import {MenuModule} from '../menu/menu.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MenuModule],
  exports: [TableComponent]
})
export class TableModule { }
