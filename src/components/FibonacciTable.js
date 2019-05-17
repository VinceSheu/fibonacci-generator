import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


function FibonacciTable(props) {
  const { fibonacciArray } = props;

  return (
    <table className="fib-table">
      <thead>
        <tr>
          <th className="left-column">n</th>
          <th>F(n)</th>
        </tr>
      </thead>
      <tbody>
      {
        fibonacciArray.map( (fibonacciNumber, index) => (
          <tr> 
            <td className="left-column">{index}</td>
            <td>{fibonacciNumber}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}

FibonacciTable.propTypes = {
  fibonacciArray: PropTypes.array.isRequired,
};

export default FibonacciTable;