import {
  ChangeDetectionStrategy,
  Component,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'artea-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RteaToolbarComponent {
  constructor(private view: ViewContainerRef) {}
}
