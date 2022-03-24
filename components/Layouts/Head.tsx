import Head from 'next/head';

import { FC } from 'react';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Monologue.ttf"
          type="font/woff2"
          as="font"
        />
        <link
          rel="preload"
          href="/fonts/Maragsƒ.otf"
          type="font/opentype"
          as="font"
        />
        <title>Trusted Techno Electric</title>
        <meta
          name="description"
          content="Trusted Techno Electric provides electrical services in Toronto 	&#38; GTA. Need High Quality Potlights installed? Call for a FREE Quote."
        ></meta>
      </Head>
      <main>{children}</main>
    </>
  );
};
