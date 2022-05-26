import { IconType } from 'react-icons/lib';
import { MdHome, MdPeople } from 'react-icons/md';

export interface MenuItem {
  title: string;
  icon: IconType;
  route: string;
}

const links: MenuItem[] = [
  {
    title: 'Home',
    icon: MdHome,
    route: '/admin'
  },
  {
    title: 'Pessoas',
    icon: MdPeople,
    route: '/admin/people'
  }
];

export default links;