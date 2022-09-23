import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Wrapper from '../components/Wrapper';
import { SessionProvider } from 'next-auth/react';
//Styles
import '../styles/globals.css';
import '../styles/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import { barberData } from '../data/barberData';
import { BarberData } from '../data/barberData';

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
        <Wrapper>
          <Component {...pageProps} barbers={barberData}/>
        </Wrapper>
    </SessionProvider>
  );
}

export default MyApp;
