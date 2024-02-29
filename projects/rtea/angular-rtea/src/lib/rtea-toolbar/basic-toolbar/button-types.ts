import { Observable } from 'rxjs';
import { TemplateRef } from '@angular/core';

export type Button = {
  type: 'button';
  priority?: number;
  title: string;
  content: string;
  onClick?: (event: MouseEvent) => void;
  disabled?: Observable<boolean>;
};

export type Select<T = unknown> = {
  type: 'select';
  priority?: number;
  title: string;
  options: { text: string; value: T }[];
  selected: Observable<string>;
  onChange(value: T, key: string): void;
  disabled?: Observable<boolean>;
};

export type Template<T = never> = {
  type: 'template';
  show?: boolean;
  template: TemplateRef<T>;
  context: T;
};

export type HTML = {
  type: 'html';
  show?: boolean;
  element: HTMLElement;
};

export type ControlGroup = {
  type: 'group';
  show?: boolean;
  title: string;
  content: Control[];
};

export type Control = Button | Select | Template | HTML | ControlGroup;
