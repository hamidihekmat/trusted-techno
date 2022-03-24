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
      </Head>
      <main>{children}</main>
    </>
  );
};
