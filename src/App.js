// App.js
import React from 'react';
import BarChart from './components/BarChart';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div>
      <h1>Coffee House Chains</h1>
      <h4>A ranking of selected leading coffeehouse chains worldwide</h4>
      <BarChart />
    </div>
  );
};

export default App;
