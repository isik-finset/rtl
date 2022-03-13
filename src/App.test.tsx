import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const MockApp = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

test('renders learn react link', async () => {
  render(<MockApp />);
  const linkElement = await screen.findByRole("button");
  expect(linkElement).toBeInTheDocument();
});
