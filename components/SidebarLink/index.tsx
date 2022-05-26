import React from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Icon,
  Link,
} from '@chakra-ui/react';

import { NavItemProps } from './types';

const SidebarLink = ({ route, icon, children, ...rest }: NavItemProps) => {
  return (
    <NextLink href={route} passHref>
      <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          color="white"
          _hover={{
            bg: 'gray.400',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    </NextLink>
  );
};

export default SidebarLink;