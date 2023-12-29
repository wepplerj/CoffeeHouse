// Inside your main JavaScript file (e.g., index.js or App.js)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'; // Import your CSS file

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
