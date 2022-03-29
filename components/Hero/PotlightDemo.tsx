import { CompanyBackDrop } from '@components/Hero/Company';
import { Potlight } from '@components/Interactive/Potlight';
import { styled } from '@ui/stiches';
import { DimmableSwitch } from '@components/Interactive/Switch';

import { dimmerMachine } from '@components/Interactive/dimmerMachine';
import { useMachine } from '@xstate/react';
import { CSS } from '@stitches/react';
import { TemperatureGroup } from '@components/Interactive/TemperatureGroup';
import { motion } from 'framer-motion';

import { Tooltip } from '@mantine/core';
import { toggleMachine } from '@components/Nav/toggleMachine';

const { initial, animate, transition } = {
  animate: { scale: 1, translateY: 0, opacity: 1 },
  initial: { scale: 0.8, translateY: 20, opacity: 0 },
  transition: { duration: 0.3, delay: 0.4 },
};

export const PotlightDemo = ({ css }: { css?: CSS }) => {
  const [_state, _send, service] = useMachine(dimmerMachine);
  const [toggleState, toggleSend] = useMachine(toggleMachine, {
    actions: {
      onActive: undefined,
      onInactive: undefined,
    },
  });

  return (
    <Wrapper
      css={css}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <LightScene>
        <CompanyBackDrop />
        <Potlight
          css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          dimmerMachineRef={service}
        />
      </LightScene>

      <Box
        css={{
          position: 'absolute',
          top: '80%',
        }}
      >
        <DimmableSwitch dimmerMachineRef={service} />

        <HoverWrapper
          onHoverStart={() => toggleSend({ type: 'TOGGLE' })}
          onHoverEnd={() => toggleSend({ type: 'TOGGLE' })}
        >
          <Tooltip
            opened={toggleState.matches('active')}
            label="Change Temperature"
            position="left"
            withArrow
            color="gray"
          >
            <TemperatureGroup dimmerMachineRef={service} />
          </Tooltip>
        </HoverWrapper>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div, {
  maxWidth: '43rem',
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
});

const LightScene = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
});

const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

const HoverWrapper = styled(motion.div, {
  background: 'White',
  borderRadius: '20px',
});
