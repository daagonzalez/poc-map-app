# POC Map App

This project is a web application that displays a map with points of interest (POCs) fetched from an API. Users can select multiple POCs, and a chart is generated based on data from those selected POCs. The map is built using **React-Leaflet** to integrate with Leaflet.js.

## Features
- Display Points of Interest (POCs) on a map.
- Select multiple POCs by clicking on them.
- Generate a chart based on selected POCs using data from the API.

## Tech Stack
- **Frontend Framework:** React
- **Map Library:** React-Leaflet (Leaflet.js)
- **Charting Library:** (Add your charting library, e.g., Chart.js)
- **Testing Framework:** Jest with React Testing Library

## Getting Started

### Prerequisites
- **Node.js** and **npm** (Ensure Node.js is installed on your machine)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/daagonzalez/poc-map-app.git
   cd poc-map-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the `.env` file (if needed) to configure the API URL or other environment variables.

### Running the Application

To start the development server, run:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Testing the Application

This project uses **Jest** and **React Testing Library** for unit tests.

To run the tests:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.