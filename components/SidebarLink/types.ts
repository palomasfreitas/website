import { ReactText } from 'react';
import { FlexProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface NavItemProps extends FlexProps {
  route: string;
  icon: IconType;
  children: ReactText;
}