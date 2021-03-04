import {
  Button,
  Container,
  Center,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "@/utils/auth";

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
            <Center display="flex" flexDirection="column">
              <Text opacity={0.9}>{auth.user.email}</Text>
              <Button
                variant="solid"
                mt={5}
                fontSize={"13px"}
                lineHeight={"18px"}
                letterSpacing={"-0.1px"}
                fontWeight={"300px"}
                colorScheme="blue"
                onClick={(e) => auth.signout()}
              >
                Sign Out
              </Button>
            </Center>
          ) : (
            <Box>
              <Heading
                mb={5}
                fontSize={"24px"}
                lineHeight={"30px"}
                letterSpacing={"0.6px"}
                fontWeight={"800px"}
                textAlign="center"
              >
                Sign in
              </Heading>
              <Button
                variant="solid"
                fontSize={"13px"}
                lineHeight={"18px"}
                letterSpacing={"-0.1px"}
                fontWeight={"300px"}
                leftIcon={<FontAwesomeIcon icon={faGithub} />}
                colorScheme="blue"
                onClick={(e) => auth.signinWithGitHub()}
              >
                <Text>Sign in with Github</Text>
              </Button>
            </Box>
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
