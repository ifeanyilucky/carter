import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../Layout/navbar';
import Footer from '../Layout/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
