import type { NextPage } from 'next';

import { PotlightDemo } from '@components/Hero/PotlightDemo';
import { NavBar } from '@components/Nav';

import { styled } from '@ui/stiches';

const HomeLayout = styled('div', {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '50px 1fr 50px',
});

// left: 1139px;
//top: 427px;
const Home: NextPage = () => {
  return (
    <HomeLayout>
      <NavBar css={{ alignSelf: 'center', justifySelf: 'center' }} />
      <PotlightDemo css={{ justifySelf: 'center', marginTop: '1rem' }} />
    </HomeLayout>
  );
};

export default Home;
