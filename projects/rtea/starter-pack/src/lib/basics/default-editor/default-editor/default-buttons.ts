import { Control, ControlGroup, markButton } from '@rtea/angular-rtea';
import { EditorView } from '@rtea/prosemirror-rtea';

export function bindTextControls(
  view: EditorView | (() => EditorView)
): ControlGroup {
  return {
    type: 'group',
    title: 'Text',
    show: true,
    content: [
      markButton('Bold', 'strong', view),
      markButton('Italic', 'em', view),
      markButton('Strikethrough', 'strike', view),
      markButton('Underline', 'u', view),
      markButton('Subtext', 'sub', view),
      markButton('Supertext', 'super', view),
    ],
  };
}

export function bindDefaultControls(
  view: EditorView | (() => EditorView)
): (Control | ControlGroup)[] {
  return [bindTextControls(view)];
}
