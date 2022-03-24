import type { NextPage } from 'next';

import { Hero } from '@components/Hero/Hero';
import { Box } from '@ui/stiches';

const Home: NextPage = () => {
  return (
    <Box css={{ maxWidth: 1070, margin: '0 auto' }}>
      <Hero />
    </Box>
  );
};

export default Home;
