import React, { Component } from 'react';
import './App.css';
import { generateFibonacciSequence } from './helpers/fibonacci-helper';
import FibonacchiTable from './components/FibonacciTable'; 

class App extends Component {
  // Initialize state
  state = { value: '', fibonacciArray: [], error: null, loading: false };

  handleSubmit = () => {
    this.setState({fibonacciArray: [], loading: true})
    const fibonacciArray = generateFibonacciSequence(Number(this.state.value));
    this.setState({fibonacciArray, loading: false})
  }

  onChange = (event) => {
    const value = event.target.value;
    let error = null;
    if (value <= 0) {
      error = 'Please enter a non-negative, non-zero number';
    } 
    this.setState({ value, error });
  }

  render() {
    const { value, fibonacciArray, loading, error } = this.state;
    const inputValue = !value && value !== 0 ? '' : value;

    return (
      <div className="App">
        <h1>Fibonacci Generator</h1>
        <p>Please enter the number of fibonacci numbers you would like to generate</p>
        <input className="input-field" type="number" value={inputValue} onChange={this.onChange} />
        <button className="submit-btn" onClick={this.handleSubmit} disabled={loading || error}> Submit </button>
        <div className="error-msg">{error}</div>
        { loading && <div className="loader"></div> }
        { fibonacciArray.length > 0 &&
          <FibonacchiTable fibonacciArray={fibonacciArray}/>
        }
      </div>
    );
  }
}

export default App;
