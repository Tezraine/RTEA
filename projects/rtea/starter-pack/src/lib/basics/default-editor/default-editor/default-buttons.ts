import { Control, ControlGroup, markButtons } from '@rtea/angular-rtea';
import { EditorView, basicTagMarks } from '@rtea/prosemirror-rtea';

export function bindTextControls(
  view: EditorView | (() => EditorView)
): ControlGroup {
  return {
    type: 'group',
    title: 'Text',
    show: true,
    content: [
      ...markButtons(
        {
          Bold: basicTagMarks.strong,
          Italic: basicTagMarks.em,
          Strikethrough: basicTagMarks.strike,
          Underline: basicTagMarks.underline,
          Subtext: basicTagMarks.sub,
          Supertext: basicTagMarks.super,
        },
        view
      ),
    ],
  };
}

export function bindDefaultControls(
  view: EditorView | (() => EditorView)
): (Control | ControlGroup)[] {
  return [bindTextControls(view)];
}
