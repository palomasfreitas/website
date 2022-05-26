import React from 'react';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

const OldHero = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex
        p={8} flex={1} align={'center'} justify={'center'} width="60%">
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Image src='/logo-stamp.jpeg' alt='Carimbo da marca mosaico' h="28" w="28" mb="-10" ml="-10" />
          <Heading paddingTop={5} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>

            <Text
              as={'span'}
              position={'relative'}
              _after={{
                // eslint-disable-next-line quotes
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: -0.5,
                left: 0,
                bg: 'green.700',
                zIndex: -1,
              }}>
              Ser moldado por Deus
            </Text>
            <br />{' '}
            <Text color={'green.700'} as={'span'}>
              e moldar o mundo
            </Text>{' '}
          </Heading>
          <Flex padding={2} paddingLeft={3} paddingBottom={1}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DpV1yiIMhnM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Flex>
          <Text fontSize={{ base: 'md', lg: 'lg' }} fontStyle="italic" color={'gray.500'}>
            Desde o barro no gênesis - a criação - somos livres moldados por Deus, mas também chamados a moldar sua criação, revelando imagem e semelhança não só em nós mas em tudo aqui que reordenamos.
            <br />
            <br />
            Se prestamos atenção, veremos que cada detalhe do nosso dia tem belezas e deslubres ocultos que só a atenção e a presença plena, em tudo o que vemos e fazemos, pode revelar.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <a href="https://www.youtube.com/channel/UCc1VABtxI-Pf-yAbRvc5Zbw">
              <Button
                rounded={'full'}
                bg={'green.700'}
                color={'white'}
                _hover={{bg: 'green.400'}}>
                Assista ao vivo
              </Button>
            </a>
            <a href="https://linkez.in/mosaicoigreja">
              <Button rounded={'full'}>Saiba mais</Button>
            </a>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} >
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            '/bg_home_lg.jpg'
          }
        />
      </Flex>
    </Stack>
  );
};

export default OldHero;