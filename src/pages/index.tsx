import type { NextPage } from 'next';
import HomePage from "../components/HomePage";
// import {connectToDatabase} from '../utils/mongodb'
// import SignInPage from '../components/SignInPage';
// import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  //const { data: session } = useSession();

  // function Component() {
  //   if (session) {
  //     return <HomePage />  
  //   }
  //   return <SignInPage />
  // }

  return (
    <div>
      <HomePage />
    </div>
  );
};


export default Home;

// export async function getServerSideProps(context:any) {
//   const { db, client } = await connectToDatabase()

//   return {
//     props: { },
//   }
// }
