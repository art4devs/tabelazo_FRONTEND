import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewTitleComponent} from './view-title.component';

@NgModule({
  declarations: [ViewTitleComponent],
  exports: [ViewTitleComponent],
  imports: [CommonModule]
})
export class ViewTitleModule { }
