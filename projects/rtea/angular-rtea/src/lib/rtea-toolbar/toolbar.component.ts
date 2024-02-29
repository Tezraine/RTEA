import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'artea-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class RteaToolbarComponent {
  constructor(private view: ViewContainerRef) {}
}
