import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../utils/auth";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
