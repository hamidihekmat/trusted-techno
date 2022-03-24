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

      // potlights
      temp3000: '#fffbcc',
      temp4000: '#ffffff',
      temp5000: '#eafbff',
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
      maragsf: 'Maragsf',
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
    boxSizing: 'border-box',
    backgroundColor: '#F4F4F0',
    fontSmooth: 'subpixel-antialiased',
  },
  '*': {
    padding: 0,
    margin: 0,
  },
  '@font-face': [
    {
      src: `url('fonts/Monologue.ttf') format('woff2');`,
      fontFamily: 'Monologue',
    },
    {
      src: 'url("fonts/Maragsƒ.otf") format("opentype")',
      fontFamily: 'Maragsf',
    },
  ],
});

export const Box = styled('div', {});
