import React from 'react';
import { NextPage } from 'next';
import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, HStack, useDisclosure } from '@chakra-ui/react';
import PageLayout from '../../core/layout';
import { FiUserPlus } from 'react-icons/fi';
import { PeopleForm, PeopleTable } from '../../components';

const People: NextPage = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PageLayout>
        <Heading as='h1' size='2xl' >
          Pessoas
        </Heading>
        <Divider margin={2} />
        <HStack>
          <Button leftIcon={<FiUserPlus />} colorScheme='blue' variant='solid' onClick={onOpen}>
            Nova Pessoa
          </Button>
        </HStack>
        <Box my={4} borderRadius='lg' bg="white" padding={4}>
          {/* <PeopleTable /> */}
        </Box>
        <Drawer isOpen={isOpen} onClose={onClose} size="sm">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Adicionar nova pessoa
            </DrawerHeader>
            <DrawerBody>
              <PeopleForm />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </PageLayout>
    </>
  );
};

export default People;