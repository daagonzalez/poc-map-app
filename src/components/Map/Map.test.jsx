import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Map from './Map';

describe('Map component', () => {
  it('renders MapContainer with center, zoom, and style, and contains a TileLayer with url and attribution', () => {
    render(<Map />);

    const mapContainer = screen.getByTestId('leaflet-map-container');
    expect(mapContainer).toBeInTheDocument();
    expect(mapContainer).toHaveAttribute('data-center', '51.505,-0.09');
    expect(mapContainer).toHaveAttribute('data-zoom', '13');
    expect(mapContainer).toHaveAttribute('data-style', JSON.stringify({ height: '100vh', width: '100%' }));

    const tileLayer = screen.getByTestId('leaflet-tile-layer');
    expect(tileLayer).toBeInTheDocument();
    expect(tileLayer).toHaveAttribute('data-url', 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    expect(tileLayer).toHaveAttribute('data-attribution', '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors');
  });
});
