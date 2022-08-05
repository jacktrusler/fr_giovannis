import { signIn } from 'next-auth/react';

function SignInPage() {
  return (
    <div>
      <p>Sign yo ass in boi</p>
      <button onClick={() => signIn()}>Sign In</button> 
    </div>

  )
}

export default SignInPage;
