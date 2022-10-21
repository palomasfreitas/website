import React, { FunctionComponent } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Stack,
  useToast
} from '@chakra-ui/react';

import schema from './schema';
import { ILoginForm, LoginFormProps } from './types';
import useFirebaseSignIn from '../../hooks/useFirebaseSignIn';

const LoginForm: FunctionComponent<LoginFormProps> = ({ onRedirect }) => {
  const { control, handleSubmit, formState, resetField } = useForm<ILoginForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const toast = useToast();

  const { isLoading, signIn } = useFirebaseSignIn();
  const { isValid } = formState;

  const onSubmit: SubmitHandler<ILoginForm> = async ({ email, password }) => {
    signIn(email, password)
      .then(() => {
        onRedirect();
      })
      .catch(() => toast({
        title: 'Erro na tentativa de login',
        description: 'Revise os dados ou tente novamente mais tarde',
        status: 'error'
      }))
      .finally(() => resetField('password'));
  };

  return (
    <Box
      rounded={'lg'}
      bg='white'
      boxShadow={'lg'}
      p={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field, fieldState: { error } }) =>
                <Input
                  type="text"
                  placeholder="you@mail.com"
                  isInvalid={!!error}
                  {...field} />}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field, fieldState: { error } }) =>
                <Input
                  type="password"
                  placeholder="******"
                  isInvalid={!!error}
                  {...field} />}
            />
          </FormControl>
          <Divider />
          <Button
            type="submit"
            isDisabled={!isValid}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            {isLoading && <Spinner size='sm' mr={2} />}Entrar
          </Button>
        </Stack>
      </form>
    </Box >
  );
};

export default LoginForm;