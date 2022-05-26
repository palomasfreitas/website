import React from 'react';
import { render, screen } from '@testing-library/react';
import { MdHome, MdMusicNote, MdPeople } from 'react-icons/md';

import { MenuItem } from '../../../core/menu';
import Sidebar from '..';

describe('Sidebar', () => {
  const mockLinks: MenuItem[] = [{
    title: 'Home',
    icon: MdHome,
    route: '/'
  },
  {
    title: 'People',
    icon: MdPeople,
    route: '/woooow-grape-grape'
  },
  {
    title: 'Music',
    icon: MdMusicNote,
    route: '/music'
  }];

  it('should render all three mock links', () => {
    render(<Sidebar links={mockLinks} onClose={jest.fn()} />);

    expect(screen.getByText(/Home/)).toBeInTheDocument();
    expect(screen.getByText(/People/)).toBeInTheDocument();
    expect(screen.getByText(/Music/)).toBeInTheDocument();
  });

  it('should call router push method when link is clicked', async () => {
    render(<Sidebar links={mockLinks} onClose={jest.fn()} />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'People' })).toHaveAttribute('href', '/woooow-grape-grape');
    expect(screen.getByRole('link', { name: 'Music' })).toHaveAttribute('href', '/music');
  });

});