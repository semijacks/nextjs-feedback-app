import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "../utils/auth";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider
      resetCSS={true}
      theme={extendTheme({
        fonts: {
          body: "Inter",
        },
      })}
    >
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
