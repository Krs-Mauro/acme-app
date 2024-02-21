// _app.js
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: object;
}) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
