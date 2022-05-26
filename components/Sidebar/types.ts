import { BoxProps } from '@chakra-ui/react';
import { MenuItem } from '../../core/menu';

export interface SidebarProps extends BoxProps {
  links?: Array<MenuItem>;
  onClose: () => void;
}