
# React Coffee House Visualization

A simple React application for visualizing coffee house data using D3.js. This project demonstrates the implementation of a static bar chart with interactive features such as filtering, sorting, and transitions.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Features](#features)
- [Project Structure](#project-structure)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Contributing](#contributing)
- [License](#license)

## Overview

This React application leverages D3.js to create a static bar chart visualizing coffee house data. Users can interact with the chart by filtering based on different measures, sorting the data, and experiencing smooth transitions when updating the chart.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/wepplerj/CoffeeHouse.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CoffeeHouse
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

Run the development server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Features

- Static bar chart visualization
- Interactive features:
  - Filtering based on measures
  - Sorting data
  - Smooth transitions during updates

## Project Structure

The project structure follows a standard React application setup with additional components for the bar chart visualization.

- `src/`
  - `components/`: React components, including the main `BarChart` component.
  - `style.css`: Stylesheet for the application.
  - `data.csv`: Coffee house data in CSV format.

## Deploying to GitHub Pages

To deploy the application to GitHub Pages:

1. Install the `gh-pages` package:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Set the `"homepage"` field in `package.json` to your GitHub Pages URL.

3. Run the deployment script:

   ```bash
   npm run deploy
   ```

Visit your deployed application at the specified GitHub Pages URL.

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the [MIT License](LICENSE).

***This README was created with the help of ChatGPT
```
