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

const GrupoAnsiedadeold = () => {
  return (
    <Stack bgColor={'purple.200'} minH={'100vh'}>
      <VStack  w={'80%'} align={'center'} justify={'center'} direction={{ base: 'column', md: 'row' }} >
        <HStack  >
          <Heading  as='h3' size='lg' color={'purple.700'} paddingBottom={2}>
            Grupo Manejo de Ansiedade
          </Heading>
          <a href='https://www.youtube.com/channel/UCc1VABtxI-Pf-yAbRvc5Zbw'>
            <Button
              rounded={'full'}
              bg={'purple.700'}
              color={'white'}
              _hover={{bg: 'purple.300',}}
              leftIcon={<FaWhatsapp />}>
                  Nosso Whatsapp
            </Button></a>
          <a href='../'>
            <Button marginLeft={3} 
              rounded={'full'}
              bg={'purple.700'}
              color={'white'}
              _hover={{
                bg: 'purple.300',
              }}>
            PalomaFreitas.com
            </Button></a>
          
        </HStack>
      
        
        <VStack   spacing={3} >
          <Box height={580} width={7600}  overflowY={'scroll'}   w={'90%'} borderRadius={2} boxShadow='lg'  rounded='xl' bg='white'>
            <iframe  scrolling='yes' src='https://docs.google.com/forms/d/e/1FAIpQLSfP90_p1bqrWNVChncE9S0cHAMxm5PT8KuDMncO9vQVwM9wDA/viewform?embedded=true' width='760' height='2345' frameBorder='0'  >Loading…</iframe>
          </Box>  
          
        
          
          <Stack>
            <Heading p={4} as='h3' size='md' color={'purple.700'} paddingBottom={2}>
                O Porque do Grupo?
            </Heading> 
            <Box borderRadius={2} overflowY={'hidden'} boxShadow='2xl'  rounded='xl' bg='white'>
              <iframe   width='320' height='602 ' src='https://www.youtube.com/embed/Vd9zt84XQqg' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
            </Box>
          </Stack>      
          
        </VStack>
        
      
      </VStack>
    </Stack>
  );
};

export default GrupoAnsiedadeold;