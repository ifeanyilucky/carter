import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../Layout/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
