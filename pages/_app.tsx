import type { AppProps } from 'next/app';
import { globalStyles } from '@ui/stiches';
import '../styles/globals.css';

import { Layout } from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
