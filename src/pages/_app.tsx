import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Wrapper from '../components/Wrapper';
import { SessionProvider } from 'next-auth/react';
//Styles
import '../styles/globals.css';
import '../styles/index.css';
import 'react-datepicker/dist/react-datepicker.css';

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Wrapper>
          <Component {...pageProps} />
      </Wrapper>
    </SessionProvider>
  );
}

export default MyApp;
