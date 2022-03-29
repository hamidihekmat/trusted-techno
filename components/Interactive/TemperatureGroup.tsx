import { CSS } from '@stitches/react';
import { styled } from '@ui/stiches';
import { useActor } from '@xstate/react';
import { motion } from 'framer-motion';
import { IDimmerMachine } from './dimmerMachine';
import { TemperatureButton } from './TemperatureButton';

import { useState } from 'react';

export const TemperatureGroup = ({
  dimmerMachineRef,
  css,
}: {
  dimmerMachineRef: IDimmerMachine;
  css?: CSS;
}) => {
  const [state, send] = useActor(dimmerMachineRef);
  const { temperature } = state.context;
  return (
    <Wrapper css={css}>
      <TemperatureButton
        variant={'3000'}
        active={temperature === '3000' ? true : false}
        onClick={() => send({ type: 'CHANGE_TEMP', temp: '3000' })}
      >
        3000
      </TemperatureButton>

      <TemperatureButton
        variant={'4000'}
        active={temperature === '4000' ? true : false}
        onClick={() => send({ type: 'CHANGE_TEMP', temp: '4000' })}
      >
        4000
      </TemperatureButton>
      <TemperatureButton
        variant={'5000'}
        active={temperature === '5000' ? true : false}
        onClick={() => send({ type: 'CHANGE_TEMP', temp: '5000' })}
      >
        5000
      </TemperatureButton>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  gap: '14px',
  alignItems: 'center',
  padding: '1.2rem',
});
