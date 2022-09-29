import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import Splash from '../components/Splash/Splash';
import renderWithProviders from './renderWithProviders';

test('splash snapshot', () => {
  renderWithProviders(
    <MemoryRouter>
      <Splash />
    </MemoryRouter>,
  );

  const loginBtn = screen.getByRole('button', { name: 'LOGIN' });
  const registerBtn = screen.getByRole('button', {
    name: 'REGISTER',
  });

  expect(loginBtn).toBeInTheDocument();
  expect(registerBtn).toBeInTheDocument();
});
