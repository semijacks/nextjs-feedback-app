import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { AuthProvider } from "@/utils/auth";
import myTheme from "@/styles/theme";
import fonts from "@/styles/font-face";

const theme = extendTheme(myTheme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
