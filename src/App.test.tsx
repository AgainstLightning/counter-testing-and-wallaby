import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title', () => {
  render(<App />);
  const text = screen.getByText("Awesome Counter");
  expect(text).toBeInTheDocument();
});
