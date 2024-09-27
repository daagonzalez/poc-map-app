export function MapContainer({ center, zoom, style, children }) {
    return (
        <div data-testid="leaflet-map-container" data-center={center} data-zoom={zoom} data-style={JSON.stringify(style)}>
            {children}
        </div>
    );
}
export function TileLayer({ url, attribution }) {
    return (
        <div data-testid="leaflet-tile-layer" data-url={url} data-attribution={attribution} />
    );
}