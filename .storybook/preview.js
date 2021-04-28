import React from 'react';
import { GlobalStyle } from '../src/shared/global';
import '../src/index.css';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
  themes: [
    { name: 'dao', class: 'dao-light', color: '#4070F4', default: true },
    { name: 'crowdfund', class: 'crowd-light', color: '#f50057' },

  ],
}