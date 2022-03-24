import { styled } from '@ui/stiches';
import { IDimmerMachine } from './dimmerMachine';

import { useActor } from '@xstate/react';

export const DimmableSwitch = ({
  dimmerMachineRef,
}: {
  dimmerMachineRef: IDimmerMachine;
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
    <FacePlate>
      <OuterSwitch>
        <SwitchButton
          onClick={handleToggle}
          variant={
            state.matches('active') || state.matches('dim')
              ? 'active'
              : 'inactive'
          }
        />
        <LutronText>Lutron</LutronText>
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

  width: '200px',
  height: '270px',
  minHeight: '270px',
  left: '656px',
  top: '702px',

  background: 'White',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 48px 1px #DCDCDC',
});

const OuterSwitch = styled('div', {
  position: 'absolute',
  width: '80px',
  height: '180px',
  background: 'inherit',
  border: '1px solid #CFCFCF',
  boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
});

const SwitchButton = styled('div', {
  position: 'absolute',
  width: '80px',
  height: '90px',
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

const LutronText = styled('p', {
  position: 'absolute',
  fontFamily: '$helvetica',
  fontSize: '8px',
  fontWeight: 'lighter',
  textTransform: 'uppercase',
  color: '#BBBBBB',
  bottom: '3%',
  left: '13%',
});

const Dimmer = styled('input', {
  position: 'absolute',
  background: '#FFFFFF',
  bottom: '45%',
  right: '-20%',
  transform: 'rotate(-90deg)',
  cursor: 'pointer',

  width: '170px',
  color: 'White',
  '&:focus': {
    outline: 'none',
  },
  '&::-webkit-slider-thumb': {
    background: 'Gray',
  },
});
