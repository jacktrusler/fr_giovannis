import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Wrapper from '../components/Wrapper';
import '../styles/globals.css';
import '../styles/index.css';
import 'react-datepicker/dist/react-datepicker.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
