import { Attrs, MarkSpec } from 'prosemirror-model';

export type StyledMarkSpec = MarkSpec;

export type StyleCSSProp = Exclude<
  {
    [P in keyof CSSStyleDeclaration]: CSSStyleDeclaration[P] extends string
      ? P
      : never;
  }[keyof CSSStyleDeclaration],
  number
>;

export function createStyledMarkSpec<T>(
  style: StyleCSSProp,
  defaultValue: T,
  tag = 'span'
): StyledMarkSpec {
  return {
    attrs: { [style]: { default: defaultValue } },
    parseDOM: [
      {
        tag,
        style,
        getAttrs(dom): Attrs | null {
          return typeof dom === 'string'
            ? null
            : {
                [style]: dom.style[style]
              };
        }
      }
    ],
    toDOM(mark) {
      const dom = document.createElement(tag);
      dom.style[style] = mark.attrs[style];
      return { dom, contentDOM: dom };
    }
  };
}

export const basicStyleMarks = {
  fontFamily: createStyledMarkSpec('fontFamily', 'Arial'),
  fontSize: createStyledMarkSpec('fontSize', '12px')
};

const fontFamilies = [
  'Arial',
  'Verdana',
  'Tahoma',
  'Trebuchet MS',
  'Times New Roman',
  'Georgia',
  'Garamond',
  'Courier New',
  'Brush Script MT'
];

export type StyleSelectorDefinition = {
  [markname: string]: { text: string; value: Attrs | null | undefined }[];
};

export const basicStyleMarkSelectors: StyleSelectorDefinition = {
  fontFamily: fontFamilies.reduce(
    (acc, i) => {
      acc.push({ text: `Font Family: ${i}`, value: { fontFamily: i } });
      return acc;
    },
    [{ text: 'Default', value: { fontFamily: null } }] as {
      text: string;
      value: Attrs | null | undefined;
    }[]
  ),
  fontSize: Array(42)
    .fill(0)
    .reduce(
      (acc, _, i) => {
        acc.push({
          text: `Font Size: ${++i}`,
          value: { fontSize: i + 'px' }
        });
        return acc;
      },
      [{ text: 'Default', value: null }] as {
        text: string;
        value: Attrs | null | undefined;
      }[]
    )
};
