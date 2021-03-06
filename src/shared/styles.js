import {css} from 'styled-components';

// New styles
const headerFontBase = ["font-heading", "not-italic", "font-bold", "text-textHeadings"].join(" ")
export const fontStyles = {
  h1: [headerFontBase, 'text-32px', 'leading-46px'].join(" "),
  h2: [headerFontBase, 'text-24px', 'leading-36px'].join(" "),
  h3: [headerFontBase, 'text-20px', 'leading-30px'].join(" "),
  h4: [headerFontBase, 'text-18px', 'leading-28px'].join(" "),
  sloganLarge: [headerFontBase, 'text-80px', 'leading-90px'].join(" "),
  sloganSmall: [headerFontBase, 'text-54px', 'leading-60px'].join(" "),

  cardTitle: [headerFontBase, 'text-14px', 'leading-16px'].join(" "),

  buttonL: [
    'font-button',
    'not-italic',
    'font-medium',
    'text-textHeadings',
    'text-20px',
    'leading-24px',
    'pt-12px',
    'pl-32px',
    'pb-12px',
    'pr-32px',


  ].join(" "),
  buttonM: [
    'font-button',
    'not-italic',
    'font-medium',
    'text-textHeadings',
    'text-18px',
    'leading-22px',
    'pt-9px',
    'pl-24px',
    'pb-9px',
    'pr-24px',].join(" "),
  buttonS: ['font-button',
    'not-italic',
    'font-medium',
    'text-textHeadings',
    'text-16px',
    'leading-20px',
    'px-24px',
    'py-6px'].join(" "),
  body: ['font-body', 'font-normal', 'text-textBody', 'text-15px', 'leading-24px'].join(" "),
  bodyLarge: ['font-body', 'font-normal', 'text-textBody', 'text-18px', 'leading-28px'].join(" "),
  ProgressNumber: ['font-body', 'font-normal', 'text-textBody', 'text-28px', 'leading-41px'].join(" "),

  bodyStrong: ['font-body', 'font-medium', 'text-textHeadings', 'text-15px', 'leading-20px'].join(" "),
  bodyLargeStrong: ['font-body', 'font-medium', 'text-textHeadings', 'text-18px', 'leading-24px'].join(" "),
  caption: ['font-caption', 'font-normal', 'text-textCaption', 'text-13px', 'leading-20px'].join(" "),
};

export const appWidth = "w-full md:w-app mx-auto";

export const formStyles = {
  default: [
    'border',
    'border-formDivider',
    'text-textPlaceholder',
    'hover:border-formHoverBorder',
  ].join(" "),
  error: [
    'border',
    'border-formError',
    'text-formError',
    'placeholder-formError',
  ].join(" "),
  disabled: [
    'bg-formDisabled',
    'border-formDisabled',
    'text-textDisabled'
  ].join(" "),
  readOnly: [
    'bg-formReadOnly',
    'border-formReadOnly',
    'text-textDisabled',
  ].join(" "),
  borders: [
    'rounded-default',
  ].join(" "),
};


// HIERONDER IS TROEP

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

export const color = {
  // Palette
  primary: '#FF4785', // coral
  secondary: '#1EA7FD', // ocean
  tertiary: '#DDDDDD',

  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',

  border: 'rgba(0,0,0,.1)',

  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00',
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 12,
  },
};

export const typography = {
  type: {
    primary: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: '12',
    s2: '14',
    s3: '16',
    m1: '20',
    m2: '24',
    m3: '28',
    l1: '32',
    l2: '40',
    l3: '48',
    code: '90',
  },
};


export const breakpoint = 600;
export const pageMargin = '5.55555';

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
