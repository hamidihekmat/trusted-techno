import { CSS } from '@stitches/react';
import { styled } from '@ui/stiches';

export const NavBar = ({ css }: { css?: CSS }) => {
  return (
    <Wrapper css={css}>
      <NavItemWrapper>
        <NavItem>Projects</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>About Us</NavItem>
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

const NavItem = styled('li', {
  writingMode: 'vertical-rl',
});
