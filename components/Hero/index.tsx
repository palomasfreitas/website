import React from 'react';
import {  FaLinkedin, FaMediumM, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiArticleLine } from 'react-icons/ri';

import { MdSettings } from 'react-icons/md';


import {
  Button,
  Heading,
  Image,
  HStack,
  VStack,
  IconButton,
} from '@chakra-ui/react';

const Hero = () => {
  return (
   
    <VStack  bgColor={'#01B3A6'} minH={'100vh'} align={'center'} justify={'center'} direction={{ base: 'column', md: 'row' }} >
      <Image
        borderRadius='full'
        boxSize='150px'
        boxShadow='2xl'
        src='insta.jpeg'
        alt='Dan Abramov'
      /> 
      <Heading  paddingTop={3} as='h3' size='md' color={'green.100'} paddingBottom={1}>
            Paloma Freitas
      </Heading>
      <Heading  as='h3' size='xs' color={'green.100'} paddingBottom={2}>
            Psicóloga Clínica - CRP 02/17441
      </Heading>

      <a href='https://api.whatsapp.com/send?phone=5581996110403' >
        <Button  _hover={{ bg: '#F765A3', color: '#F9D1D1'}} shadow={'2xl'}  color='white' bgColor='#FFA4B6' w={[300, 400, 500]} leftIcon={<FaWhatsapp />}> 
          Agendamentos
        </Button>
      </a>

      <a href='./grupoansiedade' >
        <Button marginTop={1}  _hover={{ bg: '#F765A3', color: '#F9D1D1'}} shadow={'2xl'}  color='white' bgColor='#FFA4B6' w={[300, 400, 500]}>
          Grupo Manejo de Ansiedade
        </Button>
      </a>
      <a href='./grupohabvida' >
        <Button marginTop={1}  _hover={{ bg: '#F765A3', color: '#F9D1D1'}} shadow={'2xl'}  color='white' bgColor='#FFA4B6' w={[300, 400, 500]}>
          Grupo Habilidades para a Vida
        </Button>
      </a>

      <a href='http://www.institutodrtiagoqueiroz.com.br/' >
        <Button marginTop={1}  _hover={{ bg: '#F765A3', color: '#F9D1D1'}} shadow={'2xl'}  color='white' bgColor='#FFA4B6' w={[300, 400, 500]}>
            Instituto Dr. Tiago Queiroz
        </Button>
      </a>

      <a href='https://palomasfreitas.medium.com/'>
        <Button marginTop={1}  _hover={{ bg: '#F765A3', color: '#F9D1D1'}} shadow={'2xl'}  color='white' bgColor='#FFA4B6' w={[300, 400, 500]} leftIcon={<RiArticleLine />}>
          Artigos
        </Button></a>





      <Heading  as='h5' size='sm'  paddingTop={6} color={'white'} paddingBottom={2}>
            Redes Sociais
      </Heading>
      <HStack>
        <a href="https//instagram.com/palomasfreitas">
          <IconButton _hover={{ bg: 'pink.500', color: '#FFFFFF'}} bgColor={'white'} color='pink.400' icon={<FaInstagram />} aria-label={''} />
        </a>
        <IconButton _hover={{ bg: 'blue.400', color: '#FFFFFF'}}  bgColor={'white'} color='blue.400' icon={<FaLinkedin />} aria-label={''} />
        <a href="https://palomasfreitas.medium.com/">
          <IconButton boxShadow='2xl' _hover={{ bg: 'black', color: '#FFFFFF'}} bgColor={'white'} color='black' icon={<FaMediumM />} aria-label={''} />
        </a>

      </HStack>
      
      

    </VStack>
  );
};

export default Hero;