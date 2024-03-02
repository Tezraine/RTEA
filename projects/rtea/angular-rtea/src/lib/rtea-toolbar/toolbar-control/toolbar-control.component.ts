import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Wrapper component for a control element in the toolbar
 */
@Component({
  selector: 'artea-toolbar-control',
  templateUrl: './toolbar-control.component.html',
  styleUrls: ['./toolbar-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarControlComponent {}
