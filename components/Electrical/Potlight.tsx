import { styled, css } from '@ui/stiches';
import { useActor } from '@xstate/react';
import type { IDimmerMachine } from './dimmerMachine';

export const Potlight = ({
  dimmerMachineRef,
}: {
  dimmerMachineRef: IDimmerMachine;
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
    <Wrapper>
      <OuterRing>
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
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  filter: 'drop-shadow(-4px 4px 20px rgba(0, 0, 0, 0.1))',
});

const OuterRing = styled('div', {
  position: 'relative',
  width: '295px',
  height: '291.16px',
  borderRadius: '50%',
  background: 'White',
  boxShadow:
    '-24px -24px 48px 0px rgba(231, 231, 231, 1) inset, 24px 24px 48px 0px rgba(154, 154, 154, 0.25) inset',
});

const LightSource = styled('div', {
  position: 'absolute',
  width: '203.73px',
  height: '201.28px',
  borderRadius: '50%',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  transition: 'all 500ms ease-in-out',
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
