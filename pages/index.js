import { Button, Container, Center, Box } from "@chakra-ui/react";
import { useAuth } from "../utils/auth";

export default function Index() {
  const auth = useAuth();

  return (
    <div
      style={{
        backgroundColor: "#fbfbfb",
      }}
    >
      <Box
        w="100%"
        h={4}
        bgGradient="linear(to-l, #f722ca, #7928CA, #c00ab8, #FF0080,)"
      />
      <Container>
        <Center my={10}>
          {auth.user ? (
            <div>
              <p>Email: {auth.user.email}</p>
              <Button colorScheme="blue" onClick={(e) => auth.signout()}>
                Sign Out
              </Button>
            </div>
          ) : (
            <div>
              <Button
                colorScheme="blue"
                onClick={(e) => auth.signinWithGitHub()}
              >
                Sign in with Github
              </Button>
              {/* <button onClick={(e) => auth.signinWithGoogle("http://localhost:3000")}>
        Sign in with Google
      </button> */}
            </div>
          )}
        </Center>
      </Container>
    </div>
  );
}

// <Head>
//   <title>Create Next App</title>
//   <link rel="icon" href="/favicon.ico" />
// </Head>
