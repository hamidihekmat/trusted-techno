import type { NextPage } from 'next';

import { Hero } from '@components/Hero/Hero';
import { Box } from '@ui/stiches';
import { NavBar } from '@components/Nav';
import { PageNumber } from '@components/Nav/PageNumber';

import { styled } from '@ui/stiches';

const HomeLayout = styled('div', {
  width: '1200px',
  margin: '0 auto',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
});

const Home: NextPage = () => {
  return (
    <>
      <HomeLayout>
        <NavBar css={{ alignSelf: 'center', justifySelf: 'flex-start' }} />
        <Hero css={{ alignSelf: 'flex-start', paddingTop: '2rem' }} />
        <PageNumber css={{ justifySelf: 'flex-end', alignSelf: 'start' }}>
          01
        </PageNumber>
      </HomeLayout>
    </>
  );
};

export default Home;
