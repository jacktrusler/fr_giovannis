import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Wrapper = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Giovanni's</title>
        <meta name="description" content="Haircut, scheduling, styling needs" />
        <link rel="icon" href="/barber-pole.svg" />
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
