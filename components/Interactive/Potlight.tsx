import { CSS } from '@stitches/react';
import { styled } from '@ui/stiches';
import { useActor } from '@xstate/react';
import { motion } from 'framer-motion';
import type { IDimmerMachine } from './dimmerMachine';

export const Potlight = ({
  dimmerMachineRef,
  css,
}: {
  dimmerMachineRef: IDimmerMachine;
  css?: CSS;
}) => {
  const [state] = useActor(dimmerMachineRef);

  const { dimLevel, temperature } = state.context;

  const dimConfig = { initial: 100, multiplier: 1.3 };

  const tempColor =
    temperature === '3000'
      ? '#fffde8'
      : temperature === '4000'
      ? '#ffffff'
      : '#f0fdff';

  return (
    <OuterRing css={css}>
      <LightSource
        css={{
          $$temp: tempColor,
          $$dimLevel: state.matches('dim')
            ? `${dimConfig.initial + dimLevel * dimConfig.multiplier}px`
            : undefined,
        }}
        variant={
          state.matches('active')
            ? 'active'
            : state.matches('dim')
            ? 'dim'
            : 'inactive'
        }
      />
    </OuterRing>
  );
};

const OuterRing = styled('div', {
  position: 'relative',
  maxWidth: '16rem',
  width: '100%',
  borderRadius: '50%',
  aspectRatio: '1 / 1',
  background: 'White',
  filter: 'drop-shadow(-4px 4px 20px rgba(0, 0, 0, 0.1))',
  boxShadow:
    '-24px -24px 48px 0px rgba(231, 231, 231, 1) inset, 24px 24px 48px 0px rgba(154, 154, 154, 0.25) inset',

  '@bps': {
    maxWidth: '50%',
  },
});

const LightSource = styled('div', {
  position: 'absolute',
  width: '75%',
  aspectRatio: '1 / 1',
  borderRadius: '50%',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  transition: 'all 250ms ease-in-out',
  // tokens
  $$temp: '#fffbcc', // 3000: #fffbcc 4000: #ffffff 5000:
  $$dimLevel: '100px',
  variants: {
    variant: {
      active: {
        boxShadow:
          '0 0 225px $$temp, 0 0 225px $$temp, 0 0 225px $$temp, 0 0 225px $$temp, 0 0 225px $$temp',
      },
      inactive: { background: 'radial-gradient(#c7c7c7, #e1e1e1)' },
      dim: {
        boxShadow:
          '0 0 $$dimLevel $$temp, 0 0 $$dimLevel $$temp, 0 0 $$dimLevel $$temp, 0 0 $$dimLevel $$temp, 0 0 $$dimLevel $$temp',
      },
    },
  },
  defaultVariants: {
    variant: 'inactive',
  },
});
