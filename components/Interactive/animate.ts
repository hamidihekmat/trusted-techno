import { keyframes } from '@stitches/react';

export const radiate = keyframes({
  '0%': {
    boxShadow:
      '0 0 200px #fff, 0 0 200px #fff, 0 0 200px #fff, 0 0 200px #fff, 0 0 200px #fff',
  },
  '100%': {
    boxShadow:
      '0 0 225px #fff, 0 0 225px #fff, 0 0 225px #fff, 0 0 225px #fff, 0 0 225px #fff',
  },
});

export const createRadiate = (from: number, to: number) => {
  return keyframes({
    '0%': {
      boxShadow: `0 0 ${from}px #fff, 0 0 ${from}px #fff, 0 0 ${from}px #fff, 0 0 ${from}px #fff, 0 0 ${from}px #fff`,
    },
    '100%': {
      boxShadow: `0 0 ${to}px #fff, 0 0 ${to}px #fff, 0 0 ${to}px #fff, 0 0 ${to}px #fff, 0 0 ${to}px #fff`,
    },
  });
};
