import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      <style jsx global>
        {`
          html,
          body,
          #app,
          #__next {
            height: 100%;
          }
        `}
      </style>
    </>
  );
}

export default App;
