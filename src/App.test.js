import { render, screen } from '@testing-library/react';
import NumberList from './NumberList';

test('renders learn react link', () => {
  render(<NumberList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
