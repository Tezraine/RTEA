import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolbarControlComponent } from '../toolbar-control/toolbar-control.component';

@Component({
  selector: 'artea-toolbar-control-group',
  templateUrl: './toolbar-control-group.component.html',
  styleUrls: ['./toolbar-control-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarControlGroupComponent extends ToolbarControlComponent {}
