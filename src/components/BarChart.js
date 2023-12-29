// BarChart.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import '../App.css';

let data; 

const BarChart = () => {
  useEffect(() => {

    // CHART INIT ------------------------------
    const margin = { top: 50, right: 30, bottom: 30, left: 40 };
    const height = 500 - margin.top - margin.bottom;

    const width = 900 - margin.left - margin.right; // Adjust the width as needed

  // Chart initialization in the global scope
  const svg = d3.select('#chart-container').append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${2 * margin.left},${margin.top})`);
  const xScale = d3.scaleBand().rangeRound([0, width - 30]).paddingInner(0.1);
  
    const yScale = d3.scaleLinear().range([height, 0]);

    svg.append('g').attr('class', 'axis y-axis');
    svg.append('g').attr('class', 'axis x-axis').attr('transform', `translate(0,${height})`);
    svg.append('text').attr('class', 'y-axis-title').attr('transform', `translate(${-margin.left}, ${height / 2}) rotate(0)`) // Adjust the translation values as needed
    .attr('dy', '-1em') // Adjust the vertical positioning above the graph
    .style('text-anchor', 'start').style('text-anchor', 'middle');

    // Initialize the 'type' and 'sortDirection' variables
    let type = document.querySelector('#group-by').value;
    let sortDirection = 'ascending';


    // CHART UPDATE FUNCTION -------------------
    function updateChart(data, type, sortDirection) {
      // Update scale domains
      xScale.domain(data.map(d => d.company));
      yScale.domain([0, d3.max(data, d => d[type])]);;
      // Sorting based on the selected type and direction
      data.sort((a, b) => {
        const aValue = a[type];
        const bValue = b[type];
        return sortDirection === 'ascending' ? aValue - bValue : bValue - aValue;
      });

      // Update bars with transitions
      const bars = svg.selectAll('.bar').data(data, d => d.company);

      bars
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .merge(bars)
        .transition()
        .delay((d, i) => i * 50)
        .duration(500)
        .attr('x', d => xScale(d.company))
        .attr('y', d => yScale(d[type]))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d[type]));

      bars.exit().remove();

      // Update axes and axis title with transitions
  svg.select('.x-axis').transition().duration(500).call(d3.axisBottom(xScale));
  svg.select('.y-axis').transition().duration(500).call(d3.axisLeft(yScale));
  
  // Dynamically update the y-axis title based on the selected type
  const yTitleText = type === 'stores' ? 'Stores worldwide' : 'Revenue in billions U.S. dollars';
  svg.select('.y-axis-title').text(yTitleText).attr('transform', `translate(${-margin.left/10 + 50}, ${margin.top - 40}) rotate(0)`) // Adjust the translation values as needed
  .attr('dy', '-1em') // Adjust the vertical positioning above the graph
  .style('text-anchor', 'start').style('text-anchor', 'middle');; // Adjust the translation and text as needed
    }

    // CHART UPDATES ---------------------------

    d3.csv('data.csv', d3.autoType).then(initialData => {
        data = initialData;
        updateChart(data, type, sortDirection);
      });
    

    // Handling the type change
    document.querySelector('#group-by').addEventListener('change', function () {
      type = this.value;
      updateChart(data, type, sortDirection);
    });
    const sortButton = document.createElement('button');
  sortButton.innerHTML = 'Sort';
  sortButton.className = 'sort-button';
  sortButton.addEventListener('click', () => {
    sortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending';
    updateChart(data, type, sortDirection);
  });
  document.getElementById('chart-container').appendChild(sortButton);

    // Handling the sorting direction change (if needed)
    // This is already covered by the sort button click event

  }, []); // useEffect dependencies

  return (
    <div>
      <label htmlFor="group-by">Group By:</label>
      <select id="group-by">
        <option value="stores">Stores worldwide</option>
        <option value="revenue">Revenue in billion U.S. dollars</option>
      </select>
      <div id="chart-container"></div>    
    </div>
  );
};
export default BarChart;
