import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Wrapper from '../components/Wrapper';
import { SessionProvider } from 'next-auth/react';
import { createContext } from 'react'
//Styles
import '../styles/globals.css';
import '../styles/index.css';
import 'react-datepicker/dist/react-datepicker.css';

const BarbersContext = createContext<string[]>([])
const barbers: string[] = ["Giovanni Ricchiuti", "Daniel VanHorn", "Sean Merritt"]

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <BarbersContext.Provider value={barbers}> 
        <Wrapper>
          <Component {...pageProps} barbers={barbers}/>
        </Wrapper>
      </BarbersContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
