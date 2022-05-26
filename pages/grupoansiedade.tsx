import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';


import {
  Button,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  HStack,
  VStack,
  Text,
  useBreakpointValue,
  AspectRatio,
} from '@chakra-ui/react';


export const getStaticProps: GetStaticProps = async () => ({
  props: {
    isPublic: true
  },
});

const GrupoAnsiedade = () => {
  return (
    <Stack bgColor={'purple.200'}  align={'center'} justify={'center'} >
      <VStack  w={'80%'} direction={{ base: 'column', md: 'row' }}>
        <Heading  as='h3' size='lg' color={'purple.700'} paddingBottom={2}>
            Grupo Manejo de Ansiedade
        </Heading>
        <Box   maxW={'99%'} borderRadius={2} boxShadow='lg'  rounded='xl' bg='white'>
          <iframe  scrolling='yes' src='https://docs.google.com/forms/d/e/1FAIpQLSfP90_p1bqrWNVChncE9S0cHAMxm5PT8KuDMncO9vQVwM9wDA/viewform?embedded=true' width='760' height='2345' frameBorder='0'  >Loading…</iframe>
        </Box> 
      </VStack>
    </Stack>
  );
};

export default GrupoAnsiedade;