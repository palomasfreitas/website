/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  



 

  return (
    <ChakraProvider>
      {!pageProps.isPublic
        ? ( <Component {...pageProps} />)
        : <Component {...pageProps} />
      }
    </ChakraProvider>
  );
}

export default MyApp;
