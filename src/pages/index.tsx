import type { NextPage } from 'next';
import HomePage from "../components/HomePage";
import SignInPage from "../components/SignInPage"
import { useSession } from 'next-auth/react';
import {connectToDatabase} from '../utils/mongodb'

const Home: NextPage = ({}) => {
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

export async function getServerSideProps(context:any) {
  const { db, client } = await connectToDatabase()

  return {
    props: { },
  }
}
