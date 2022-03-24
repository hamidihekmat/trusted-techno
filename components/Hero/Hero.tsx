import { CompanyName } from '@components/Hero/Company';
import { Potlight } from '@components/Electrical/Potlight';
import { styled } from '@ui/stiches';
import { DimmableSwitch } from '@components/Electrical/Switch';

import { dimmerMachine } from '@components/Electrical/dimmerMachine';
import { useMachine } from '@xstate/react';

export const Hero = () => {
  const [_state, _send, service] = useMachine(dimmerMachine);

  return (
    <BackDrop>
      <Center css={{ top: '45%' }}>
        <CompanyName />
      </Center>
      <Center>
        <Potlight dimmerMachineRef={service} />
      </Center>
      <SwitchWrapper>
        <DimmableSwitch dimmerMachineRef={service} />
      </SwitchWrapper>
    </BackDrop>
  );
};

const BackDrop = styled('div', {
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
