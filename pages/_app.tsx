/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../core/firebase';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const isLoggedIn = !pageProps.isPublic && !loading && user;

  useEffect(() => {
    const isLoginPage = router.asPath.match(/\/login/i);

    if (!isLoginPage
      && !pageProps.isPublic
      && !loading
      && !user) {
      router.push(`/admin/login?from=${router.asPath}`);
    }
  }, [loading, user]);

  return (
    <ChakraProvider>
      {!pageProps.isPublic
        ? (isLoggedIn && <Component {...pageProps} />)
        : <Component {...pageProps} />
      }
    </ChakraProvider>
  );
}

export default MyApp;
