import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { Flex, Stack, Image, Button } from '@chakra-ui/react';

import { LoginForm } from '../../components';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    isPublic: true
  },
});

const Login = () => {
  const router = useRouter();

  const onRedirect = () => {
    const { query } = router;
    if (query.from) {
      router.push(`${query.from}`);
    }
    else {
      router.push('/admin');
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg="gray.700">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>  
          <Image p={8} src="/logo/color-white.png" alt="Mosaico Igreja" minW="300px" width="100%" />
          <a href="https://palomafreitas.com">
            <Button p={6}> Volte para PalomaFreitas.com</Button>
          </a>
        </Stack>
        <LoginForm onRedirect={onRedirect} />
      </Stack>
    </Flex>
  );
};

export default Login;
