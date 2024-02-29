import { setMark } from '@rtea/prosemirror-rtea';
import { Button, Control, Select } from './button-types';
import { toggleMark } from 'prosemirror-commands';
import { MarkSpec, Attrs } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { BehaviorSubject } from 'rxjs';

export function markButtons(
  marks: { [k: string]: MarkSpec },
  view: EditorView | (() => EditorView)
): Control[] {
  if (!view || !marks) {
    return [];
  }
  return Object.keys(marks).map((key) => {
    return {
      type: 'button',
      title: key,
      content: key,
      onClick: () => {
        if (typeof view === 'function') {
          view = view();
        }
        const command = toggleMark(view.state.schema.marks[key]);
        command(view.state, view.dispatch, view);
        view.focus();
      },
    } as Button;
  });
}

export function markSelectors(
  marks: {
    [markname: string]: { text: string; value?: Attrs | null }[];
  },
  view: EditorView
): Control[] {
  if (!view || !marks) {
    return [];
  }
  return Object.keys(marks).map((key) => {
    const command = setMark(view.state.schema.marks[key]);
    const tracker = new BehaviorSubject('');
    return {
      type: 'select',
      title: key,
      options: marks[key],
      selected: tracker,
      onChange: (value, key) => {
        tracker.next(key);
        command(view.state, view.dispatch, view, value);
      },
    } as Select<Attrs | null | undefined>;
  });
}
