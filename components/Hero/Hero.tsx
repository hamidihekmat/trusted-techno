import { CompanyName } from '@components/Hero/Company';
import { Potlight } from '@components/Electrical/Potlight';
import { styled } from '@ui/stiches';
import { DimmableSwitch } from '@components/Electrical/Switch';

import { dimmerMachine } from '@components/Electrical/dimmerMachine';
import { useMachine } from '@xstate/react';
import { motion } from 'framer-motion';
import { CSS } from '@stitches/react';
import { TempButton } from '@components/Electrical/TempButton';

export const Hero = ({ css }: { css?: CSS }) => {
  const [state, send, service] = useMachine(dimmerMachine);

  const { temperature } = state.context;

  return (
    <BackDrop
      css={css}
      animate={{ scale: 0.8, translateY: 0, opacity: 1 }}
      initial={{ scale: 0.6, translateY: 20, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Center css={{ top: '45%' }}>
        <CompanyName />
      </Center>
      <Center>
        <Potlight dimmerMachineRef={service} />
      </Center>
      <SwitchWrapper>
        <DimmableSwitch dimmerMachineRef={service} />
      </SwitchWrapper>
      <TempWrapper css={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
        <TempButton
          variant={'3000'}
          active={temperature === '3000' ? true : false}
          onClick={() => send({ type: 'CHANGE_TEMP', temp: '3000' })}
        >
          3000
        </TempButton>

        <TempButton
          variant={'4000'}
          active={temperature === '4000' ? true : false}
          onClick={() => send({ type: 'CHANGE_TEMP', temp: '4000' })}
        >
          4000
        </TempButton>
        <TempButton
          variant={'5000'}
          active={temperature === '5000' ? true : false}
          onClick={() => send({ type: 'CHANGE_TEMP', temp: '5000' })}
        >
          5000
        </TempButton>
      </TempWrapper>
    </BackDrop>
  );
};

const BackDrop = styled(motion.div, {
  position: 'relative',
  width: '773px',
  height: '773px',
  background: '#303030',
  borderRadius: '50%',
  margin: '0 auto',
});

const Center = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const SwitchWrapper = styled('div', {
  position: 'absolute',
  bottom: '-10%',
  left: '50%',
  transform: 'translateX(-50%)',
});

const TempWrapper = styled('div', {
  position: 'absolute',
  bottom: '-10%',
  left: '77%',
  transform: 'translateX(-50%)',
});
