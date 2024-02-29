import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RteaToolbarComponent } from './toolbar.component';
import { ToolbarControlComponent } from './toolbar-control/toolbar-control.component';
import { ToolbarControlGroupComponent } from './toolbar-control-group/toolbar-control-group.component';
import { BasicToolbarComponent } from './basic-toolbar/basic-toolbar.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    RteaToolbarComponent,
    ToolbarControlComponent,
    ToolbarControlGroupComponent,
    BasicToolbarComponent,
  ],
  imports: [CommonModule, BrowserModule],
  exports: [
    RteaToolbarComponent,
    ToolbarControlComponent,
    ToolbarControlGroupComponent,
    BasicToolbarComponent,
  ],
})
export class ArteaToolbarModule {}
