import React from 'react';
import { Box, Flex, Image, CloseButton, useColorModeValue } from '@chakra-ui/react';

import coreLinks from '../../core/menu';
import SidebarLink from '../SidebarLink';
import { SidebarProps } from './types';

const Sidebar = ({ links, onClose, ...rest }: SidebarProps) => {

  const sidebarLinks = links || coreLinks;

  return (
    <Box
      transition="3s ease"
      bg="gray.900"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src="/logo/color-white.png" alt="Paloma Freitas" width="8em" />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {sidebarLinks.map((link) => (
        <SidebarLink key={link.title} icon={link.icon} route={link.route}>
          {link.title}
        </SidebarLink>
      ))}
    </Box>
  );
};

export default Sidebar;