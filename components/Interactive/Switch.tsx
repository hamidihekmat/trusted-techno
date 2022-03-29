import { styled } from '@ui/stiches';
import { IDimmerMachine } from './dimmerMachine';

import { useActor } from '@xstate/react';
import { CSS } from '@stitches/react';

export const DimmableSwitch = ({
  dimmerMachineRef,
  css,
}: {
  dimmerMachineRef: IDimmerMachine;
  css?: CSS;
}) => {
  const [state, send] = useActor(dimmerMachineRef);
  const { dimLevel } = state.context;

  const handleToggle = () => {
    send('TOGGLE');
    if (state.matches('inactive')) {
    }
    if (state.matches('active')) {
    }
  };

  return (
    <FacePlate css={css}>
      <OuterSwitch>
        <SwitchButton
          onClick={handleToggle}
          variant={
            state.matches('active') || state.matches('dim')
              ? 'active'
              : 'inactive'
          }
        />
      </OuterSwitch>
      <Dimmer
        type="range"
        min={0}
        max={100}
        value={dimLevel}
        onChange={({ target: { value } }) =>
          send({ type: 'ADJUST', value: +value })
        }
      />
    </FacePlate>
  );
};

const FacePlate = styled('div', {
  '-webkit-touch-callout': 'none',
  'user-select': 'none',

  position: 'relative',
  width: '200px',
  height: '270px',

  background: 'White',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 48px 1px #DCDCDC',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@bpm': {
    width: '165px',
    height: '225px',
  },
});

const OuterSwitch = styled('div', {
  position: 'relative',
  width: '40%',
  height: '70%',
  background: 'inherit',
  border: '1px solid #CFCFCF',
  boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)',
});

const SwitchButton = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '50%',
  background: '#F7F7F7',
  border: '1px solid #CFCFCF',
  cursor: 'pointer',
  variants: {
    variant: {
      active: {
        bottom: 0,
      },
      inactive: {
        top: 0,
      },
    },
  },
  defaultVariants: {
    variant: 'inactive',
  },
});

const Dimmer = styled('input', {
  position: 'absolute',
  background: '#FFFFFF',
  transform: 'rotate(-90deg)',
  cursor: 'pointer',
  left: '35%',
  width: '90%',
  color: 'White',
  '&:focus': {
    outline: 'none',
  },
  '&::-webkit-slider-thumb': {
    background: 'Gray',
  },
});
