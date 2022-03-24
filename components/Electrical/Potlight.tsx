import { styled } from '@ui/stiches';
import { useActor } from '@xstate/react';
import { radiate } from './animate';
import type { IDimmerMachine } from './dimmerMachine';

const determineLightLevel = (value: number) => {
  if (value > 0 && value <= 25) {
    return 'dim25';
  }
  if (value > 25 && value <= 50) {
    return 'dim50';
  }
  if (value > 50 && value <= 90) {
    return 'dim75';
  }
  return 'active';
};

export const Potlight = ({
  dimmerMachineRef,
}: {
  dimmerMachineRef: IDimmerMachine;
}) => {
  const [state] = useActor(dimmerMachineRef);

  const { dimLevel } = state.context;

  return (
    <Wrapper>
      <OuterRing>
        <LightSource
          variant={
            state.matches('active')
              ? 'active'
              : state.matches('dim')
              ? determineLightLevel(dimLevel)
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

  background: 'radial-gradient(#d5d5d5, #ffffff)',
  transition: 'box-shadow 500ms ease-in-out',
  variants: {
    variant: {
      active: {
        boxShadow:
          '0 0 200px #fff, 0 0 200px #fff, 0 0 200px #fff, 0 0 200px #fff, 0 0 200px #fff',
        animation: `${radiate} ease-in-out 10s infinite`,
      },
      inactive: {},
      dim: {
        boxShadow:
          '0 0 50px #fff, 0 0 50px #fff, 0 0 50px #fff, 0 0 50px #fff, 0 0 50px #fff',
      },
      dim25: {
        boxShadow:
          '0 0 75px #fff, 0 0 75px #fff, 0 0 75px #fff, 0 0 75px #fff, 0 0 75px #fff',
      },
      dim50: {
        boxShadow:
          '0 0 100px #fff, 0 0 100px #fff, 0 0 100px #fff, 0 0 100px #fff, 0 0 100px #fff',
      },
      dim75: {
        boxShadow:
          '0 0 125px #fff, 0 0 125px #fff, 0 0 125px #fff, 0 0 125px #fff, 0 0 125px #fff',
      },
    },
  },
  defaultVariants: {
    variant: 'inactive',
  },
});
