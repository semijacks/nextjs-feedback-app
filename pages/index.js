import Head from "next/head";
import { useAuth } from "../utils/auth";

export default function Index() {
  const auth = useAuth();

  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <div>
      <button onClick={(e) => auth.signinWithGitHub()}>
        Sign in with Github
      </button>
      {/* <button onClick={(e) => auth.signinWithGoogle("http://localhost:3000")}>
        Sign in with Google
      </button> */}
    </div>
  );
}

// <Head>
//   <title>Create Next App</title>
//   <link rel="icon" href="/favicon.ico" />
// </Head>
