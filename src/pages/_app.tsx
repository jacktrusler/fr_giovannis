import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Wrapper from '../components/Wrapper';
import { SessionProvider } from 'next-auth/react';
//Styles
import '../styles/globals.css';
import '../styles/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import Script from 'next/script';
import {Provider, useDispatch, useSelector} from 'react-redux'
import {RootState, store} from '../features/store';
import {useEffect} from 'react';

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Wrapper>
          <Script src="https://kit.fontawesome.com/7494133ce2.js" strategy='lazyOnload' />
          <Component {...pageProps} />
        </Wrapper>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
