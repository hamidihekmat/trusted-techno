import type { NextPage } from 'next';

import { PotlightDemo } from '@components/Hero/PotlightDemo';
import { NavBar } from '@components/Nav';

import { Box, styled } from '@ui/stiches';
import { Arrow } from '@components/SVG/Arrow';

const PageLayout = styled('div', {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
});

// left: 1139px;
//top: 427px;
const Home: NextPage = () => {
  return (
    <>
      <PageLayout
        css={{ display: 'grid', gridTemplateColumns: '50px 1fr 50px' }}
      >
        <NavBar css={{ alignSelf: 'center', justifySelf: 'center' }} />
        <PotlightDemo css={{ justifySelf: 'center', marginTop: '1rem' }} />
      </PageLayout>
      <PageLayout
        css={{
          position: 'relative',
          marginTop: '20rem',
          backgroundColor: '#CFCFC7',
          '&::before': {
            content: '',
            position: 'absolute',
            top: '50%',
            width: '100%',
            height: '444px',
            backgroundColor: '#201A15',
            zIndex: 0,
          },
        }}
      >
        <Heading>Our Recent Project.</Heading>

        <Box
          css={{
            position: 'relative',
            display: 'grid',
            placeItems: 'center',
            padding: '48px',
            marginTop: '0.5rem',
            '*': {
              zIndex: 99999,
            },
          }}
        >
          <Box css={{ position: 'relative' }}>
            <Image
              sizes={'mobile'}
              src="/images/kitchen_potlight.png"
              alt="Kitchen Potlight"
            />
            <ProjectTitle>Kitchen Potlight</ProjectTitle>
            <ProjectLocation>Pickering, Ontario</ProjectLocation>
            <InsightText>
              transform your home with bright and effecient
              <span style={{ color: '#FE6439' }}> LED </span>
              lights
            </InsightText>
            <Arrow
              css={{
                position: 'absolute',
                top: '51%',
                left: '-35%',
              }}
            />
          </Box>

          <Box css={{ display: 'flex', flexDirection: 'column' }}>
            <Image
              css={{ height: '199px' }}
              src="/images/cabinet_led.png"
              alt="Under Cabinet LED"
            />
            <ProjectTitle css={{ alignSelf: 'flex-end' }}>
              Stylish Under Cabinet Light
            </ProjectTitle>
            <ProjectLocation css={{ alignSelf: 'flex-end' }}>
              Richmond Hill, Ontario
            </ProjectLocation>
          </Box>
        </Box>
      </PageLayout>
    </>
  );
};

export default Home;

const Heading = styled('h1', {
  position: 'relative',
  fontFamily: '$maragsf',
  fontSize: '2.5rem',
  color: '#FFFF',
  paddingTop: '2.5rem',

  textAlign: 'center',
  '&::before': {
    content: '',
    top: '110%',
    position: 'absolute',
    borderBottom: '2px dashed #FFFF',
    width: '16ch',
  },
});

const Image = styled('img', {
  display: 'block',
  boxShadow:
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  variants: {
    sizes: {
      mobile: {
        height: '331px',
      },
    },
  },
});

const ProjectTitle = styled('p', {
  fontFamily: '$maragsf',
  color: 'White',
  fontSize: '$6',
  margin: '$1 0',
});

const ProjectLocation = styled('p', {
  fontFamily: '$maragsf',
  fontSize: '13px',
  color: '#FE6439',
});

const InsightText = styled('p', {
  fontSize: '$7',
  maxWidth: '30ch',
  color: 'White',
  textAlign: 'start',
});
