import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('it renders the title', () => {
  render(<App />);
  const text = screen.getByText("Awesome Counter");
  expect(text).toBeInTheDocument();
});

test('it sets count text to 0 when startingValue prop is not provided', () => {
  render(<App />);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0")
});

test('it sets count text to startingValue prop when provided', () => {
  render(<App startingValue={4}/>);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("4");
});
