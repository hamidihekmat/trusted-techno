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
      1: '7.594rem', // 121.50px
      2: '5.063rem', // 81.00px
      3: '3.375rem', // 54.00px
      4: '2.25rem', // 36.00px
      5: '1.5rem', // 24.00px
      6: '1rem', // 16.00px
      7: '0.875rem',
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
  media: {
    bps: '(max-width: 600px)',
    bpm: '(max-width: 900px)',
    bpl: '(max-width: 1200px)',
  },
});

export const globalStyles = globalCss({
  body: {
    boxSizing: 'border-box',
    backgroundColor: '#F4F4F0',
    '-webkit-font-smoothing': 'antialiased',
    'text-rendering': 'optimizelegibility',
  },
  p: {
    marginBottom: '1rem',
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
