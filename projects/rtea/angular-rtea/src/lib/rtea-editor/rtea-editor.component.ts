import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { Schema, Node } from 'prosemirror-model';
import { EditorState, Plugin } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { schema } from 'prosemirror-schema-basic';

@Component({
  selector: 'artea-editor',
  templateUrl: './rtea-editor.component.html',
  styleUrls: ['./rtea-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RteaEditorComponent implements OnInit {
  public editor: EditorView = this.createEditor();
  constructor(private host: ElementRef) {}

  /**
   * Initial doc for the editor.
   * Providing a new value will reset the editor to a fresh and clean state
   */
  @Input()
  set doc(doc: Node) {
    this.docNode = doc;
    this.editor = this.createEditor();
  }

  private docNode?: Node;

  @Input()
  schema?: Schema;

  @Input()
  plugins: Plugin[] = [];

  createEditor() {
    const baseSchema = this.schema ?? schema;
    this.editor = new EditorView(
      { mount: this.host.nativeElement },
      {
        state: EditorState.create({
          doc: this.docNode,
          plugins: this.plugins,
          schema: baseSchema,
        }),
      }
    );
    return this.editor;
  }

  ngOnInit(): void {
    this.editor = this.createEditor();
  }
}
