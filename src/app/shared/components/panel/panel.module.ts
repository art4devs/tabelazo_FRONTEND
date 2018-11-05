import {NgModule} from '@angular/core';
import {PanelComponent} from './panel.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [PanelComponent],
  exports: [PanelComponent],
  imports: [CommonModule]
})
export class PanelModule { }
