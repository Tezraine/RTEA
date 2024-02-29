import { Schema, basicStyleMarks, basicTagMarks } from '@rtea/prosemirror-rtea';
import { Plugin } from 'prosemirror-state';
import { undo, redo, history } from 'prosemirror-history';
import { keymap } from 'prosemirror-keymap';
import { dropCursor } from 'prosemirror-dropcursor';
import { gapCursor } from 'prosemirror-gapcursor';
import { baseKeymap } from 'prosemirror-commands';
import { schema } from 'prosemirror-schema-basic';

export const basePlugins: Plugin<unknown>[] = [
  history(),
  keymap({ 'Mod-z': undo, 'Mod-y': redo }),
  keymap(baseKeymap),
  dropCursor(),
  gapCursor(),
];

export const defaultSchema = new Schema({
  nodes: schema.spec.nodes.remove('blockquote'),
  marks: {
    ...basicStyleMarks,
    ...basicTagMarks,
  },
});
