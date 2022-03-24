import { createStitches, globalCss } from '@stitches/react';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      gray500: 'hsl(206,10%,76%)',
      blue500: 'hsl(206,100%,50%)',
      purple500: 'hsl(252,78%,60%)',
      green500: 'hsl(148,60%,60%)',
      red500: 'hsl(352,100%,62%)',
      // background
      'bg-primary': '#F4F4F0',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '121.50px',
      2: '54px',
      3: '36px',
      4: '24px',
      5: '16.00px',
    },
    fonts: {
      helvetica: 'Helvetica, apple-system, sans-serif',
      monologue: 'Monologue',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '#F4F4F0',
    fontSmooth: 'subpixel-antialiased',
  },
  '@font-face': {
    src: `url('fonts/Monologue.ttf') format('woff2');`,
    fontFamily: 'Monologue',
  },
});

export const Box = styled('div', {});
