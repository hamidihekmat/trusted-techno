import type { NextPage } from 'next';

import { Hero } from '@components/Hero/Hero';
import { NavBar } from '@components/Nav';
import { PageNumber } from '@components/Nav/PageNumber';

import { styled } from '@ui/stiches';

const HomeLayout = styled('div', {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
});

const Aura = styled('div', {
  position: 'fixed',
  width: '733px',
  height: '733px',

  background:
    'linear-gradient(128.01deg, #F1D3B1 15.02%, rgba(243, 220, 197, 0.69) 95.01%)',
  filter: 'blur(200px)',
  borderRadius: '50%',
});

// left: 1139px;
//top: 427px;
const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Aura css={{ left: '-9.125em', top: '-16.75em' }} />
      <Aura css={{ right: '-9.125em', bottom: '-16.75em' }} />
      <NavBar css={{ alignSelf: 'center', justifySelf: 'flex-start' }} />
      <Hero css={{ alignSelf: 'flex-start', paddingTop: '2rem' }} />
      <PageNumber
        css={{ justifySelf: 'flex-end', alignSelf: 'start' }}
        animate={{ scale: 0.8, translateY: 0, opacity: 1 }}
        initial={{ scale: 0.6, translateY: 20, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        01
      </PageNumber>
    </HomeLayout>
  );
};

export default Home;
