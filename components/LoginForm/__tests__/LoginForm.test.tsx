/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import LoginForm from '..';
import { act } from 'react-dom/test-utils';

describe('LoginForm', () => {
  it('should render the submit button', async () => {
    render(<LoginForm onRedirect={() => null} />);
    expect(screen.getByText(/Entrar/i)).toBeInTheDocument();
  });

  it('should have submit button initially disabled', async () => {
    render(<LoginForm onRedirect={() => null} />);
    expect(screen.getByText(/Entrar/i)).toBeDisabled();
  });

  it('should enable button when form is valid', async () => {
    render(<LoginForm onRedirect={() => null} />);

    const emailInput = screen.getByLabelText(/Email/);
    const passwordInput = screen.getByLabelText(/Senha/);

    await act(async () => {
      fireEvent.input(emailInput, {
        target: { value: 'dev@mosaicoigreja.com' }
      });

      fireEvent.input(passwordInput, {
        target: { value: '123' }
      });
    });

    expect(screen.getByText(/Entrar/i)).not.toBeDisabled();
  });
});
