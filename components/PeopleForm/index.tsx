import React, { FunctionComponent } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Select,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Spinner,
  Stack,
} from '@chakra-ui/react';
import { useAddress } from '../../hooks';

const PeopleForm: FunctionComponent = () => {
  const { address, getByCpf } = useAddress();
  return (
    <Stack>
      <FormLabel>Nome</FormLabel>
      <HStack>
        <FormControl>
          <Input type="text" placeholder='Ex: João' />
        </FormControl>
        <FormControl>
          <Input type="text" placeholder='Silva' />
        </FormControl>
      </HStack>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="email@mosaicoigreja.com" />
        </FormControl>
      </FormControl>
      <FormControl>
        <FormLabel>Data de nascimento</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Telefone</FormLabel>
        <Input type="text" />
      </FormControl>
      <button onClick={() => getByCpf('51020090')}>Buscar</button>
      <Box>
        {address?.street}
      </Box>
    </Stack>
  );
};

export default PeopleForm;