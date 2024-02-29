/*
 * Public API Surface of prosemirror-rtea-extensions
 */

export * from './lib/commands/boundCommand';
export * from './lib/commands/setMark';
export * from './lib/context/editorContext';
export * from './lib/marks/styleMarks';
export * from './lib/marks/tagMarks';
export * from './lib/plugins/onChangePlugin';

// Re-export ProseMirror packages for convienence
export * from 'prosemirror-model';
export * from 'prosemirror-state';
export * from 'prosemirror-transform';
export * from 'prosemirror-view';
