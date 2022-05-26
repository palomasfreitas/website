import React from 'react';
import { screen, render } from '@testing-library/react';

import Auth from '../../auth';
import PageLayout from '..';

describe('Layout', () => {
  let authSpy: jest.SpyInstance;

  beforeAll(() => {
    authSpy = jest.spyOn(Auth, 'getCurrentUser').mockReturnValue('dev@mosaicoigreja.com');
  });

  afterAll(() => authSpy.mockRestore());

  it('should show menu by default', () => {
    render(<PageLayout />);
    expect(screen.getByText(/Home/)).toBeInTheDocument();
  });
});
