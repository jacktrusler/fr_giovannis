import type { NextPage } from 'next';
import { useState,useEffect } from 'react';
import HomePage from "../components/HomePage";
import SignInPage from "../components/SignInPage"
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log(session)

  function Component() {
    if (session) {
      return <HomePage />  
    }
    return <SignInPage />
  }

  return (
    <div>
      <Component />
    </div>
  );
};


export default Home;
