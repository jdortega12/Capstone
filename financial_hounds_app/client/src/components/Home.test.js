import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Sign up button', () => {
  render(<Home />);
  const buttonElement = screen.getByText(/Sign up/i);
  expect(buttonElement).toBeInTheDocument();
});