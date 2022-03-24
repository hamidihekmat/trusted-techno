import { CSS } from '@stitches/react';
import { styled } from '@ui/stiches';
import { motion } from 'framer-motion';

const navItems = ['Projects', 'Services', 'About Us'];

export const NavBar = ({ css }: { css?: CSS }) => {
  return (
    <Wrapper css={css}>
      <NavItemWrapper>
        {navItems.map((name, index) => (
          <NavItem
            animate={{ scale: 0.8, translateY: 0, opacity: 1 }}
            initial={{ scale: 0.6, translateY: -20, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index / 10 }}
            key={index}
          >
            {name}
          </NavItem>
        ))}
      </NavItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('nav', {});

const NavItemWrapper = styled('ul', {
  // reset
  listStyle: 'none',
  gap: '48px',

  display: 'flex',
  flexDirection: 'column',

  fontFamily: '$helvetica',
  fontWeight: 400,
  fontSize: '20px',
  letterSpacing: '0.1em',
});

const NavItem = styled(motion.li, {
  writingMode: 'vertical-rl',
});
