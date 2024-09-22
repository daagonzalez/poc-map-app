import { render, screen } from '@testing-library/react';
import Map from './Map';

test('renders map component', () => {
  render(<Map />);
  const mapElement = screen.getByTestId('map-container');
  expect(mapElement).toBeInTheDocument();
});
