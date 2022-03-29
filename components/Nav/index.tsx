import { useState } from 'react';
import { CSS } from '@stitches/react';
import { styled } from '@ui/stiches';
import { motion, useAnimation } from 'framer-motion';
import { Burger } from '@mantine/core';

import { toggleMachine } from './toggleMachine';
import { useMachine } from '@xstate/react';

const navItems = ['Projects', 'Services', 'About Us'];
const variants = {
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    translateY: 0,
    transition: {
      delay: +i / 10,
    },
  }),
  hidden: {
    opacity: 0,
    scale: 0.8,
    translateY: -20,
  },
};

export const NavBar = ({ css }: { css?: CSS }) => {
  const controls = useAnimation();
  const [state, send] = useMachine(toggleMachine, {
    actions: {
      onActive: () => controls.start('visible'),
      onInactive: () => controls.start('hidden'),
    },
  });

  return (
    <Wrapper css={css}>
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Burger
          size="sm"
          opened={state.matches('active')}
          onClick={() => send({ type: 'TOGGLE' })}
          title={
            state.matches('active') ? 'Close navigation' : 'Open navigation'
          }
        />
      </motion.div>

      <NavItemWrapper>
        {navItems.map((name, i) => (
          <NavItem
            custom={i}
            initial="hidden"
            animate={controls}
            variants={variants}
            key={i}
          >
            {name}
          </NavItem>
        ))}
      </NavItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('nav', {
  display: 'grid',
  placeItems: 'center',
  gap: '2rem',
  marginTop: '1rem',
  zIndex: 999999,
});

const NavItemWrapper = styled('ul', {
  // reset
  listStyle: 'none',
  gap: '48px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  fontFamily: '$helvetica',
  fontWeight: 400,
  fontSize: '1rem',
  letterSpacing: '0.1em',
});

const NavItem = styled(motion.li, {
  writingMode: 'vertical-rl',
});
