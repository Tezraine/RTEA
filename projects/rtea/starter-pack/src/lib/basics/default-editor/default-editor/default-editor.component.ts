import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { DOMParser } from 'prosemirror-model';
import { Plugin } from 'prosemirror-state';
import { Control } from '@rtea/angular-rtea';
import { bindDefaultControls } from './default-buttons';
import { basePlugins, defaultSchema } from './default-values';

@Component({
  selector: 'artea-default-editor',
  templateUrl: './default-editor.component.html',
  styleUrls: ['./default-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultEditorComponent {
  docNode$ = signal(this.getBaseDoc());
  allPlugins$ = signal(basePlugins);

  @Input()
  set domDoc(domDoc: Element | null | undefined) {
    this.docNode$.set(this.getBaseDoc(domDoc));
  }

  @Input()
  set plugins(plugins: Plugin<unknown>[]) {
    this.allPlugins$.set([...basePlugins, ...plugins]);
  }

  controls = bindDefaultControls;

  schema = defaultSchema;

  getBaseDoc(domDoc?: Element | null) {
    return DOMParser.fromSchema(this.schema ?? defaultSchema).parse(
      domDoc ?? document.createElement('div')
    );
  }

  asButton(control: Control) {
    return control?.type === 'button' ? control : null;
  }

  asSelect(control: Control) {
    return control?.type === 'select' ? control : null;
  }
}
