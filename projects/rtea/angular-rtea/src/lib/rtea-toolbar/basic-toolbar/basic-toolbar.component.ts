import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SecurityContext,
  TemplateRef,
} from '@angular/core';
import { Control } from './button-types';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'artea-basic-toolbar',
  templateUrl: './basic-toolbar.component.html',
  styleUrls: ['./basic-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicToolbarComponent {
  constructor(private sanitizer: DomSanitizer) {}

  @Input()
  controls: Control[] = [];

  @Input()
  template?: TemplateRef<Control> | null;

  asButton(control: Control) {
    return control.type === 'button' ? control : null;
  }

  asSelect(control: Control) {
    return control.type === 'select' ? control : null;
  }

  asTemplate(control: Control) {
    return control.type === 'template' ? control : null;
  }

  asHTML(control: Control) {
    return control.type === 'html'
      ? this.sanitizer.sanitize(SecurityContext.HTML, control.element)
      : null;
  }

  asGroup(control: Control) {
    return control.type === 'group' ? control : null;
  }
}
