import { render, screen } from '@testing-library/react';
import SquareTriangle from './SquareTriangle';

test('renders learn react link', () => {
  render(<SquareTriangle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
