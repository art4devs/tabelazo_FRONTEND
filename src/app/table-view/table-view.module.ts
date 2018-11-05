import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableViewComponent} from './table-view.component';
import {MenuModule} from '../shared/components/menu/menu.module';
import {RoundComponent} from './round/round.component';
import {TableComponent} from './table/table.component';
import {PanelModule} from '../shared/components/panel/panel.module';

@NgModule({
  declarations: [TableViewComponent, RoundComponent, TableComponent],
  imports: [CommonModule, MenuModule, PanelModule],
  exports: [TableViewComponent]
})
export class TableViewModule { }
