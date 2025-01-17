import React, { Component } from 'react';
import NavBar from './compenents/navBar'
import './App.css';
import Counters from './compenents/counters'

class App extends Component{

  state = { 
    counters : [
        {id: 1, value: 0},
        {id: 2, value: 2},
        {id: 3, value: 3},
        {id: 4, value: 4}
    ]
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };
  
  handleReset = () =>{
    var counters = this.state.counters.map(c => {c.value = 0; return c;});
    this.setState(counters);
  };
  
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = counter;
    counters[index].value++;
    this.setState(counters);
  };
  
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
        <main>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement = {this.handleIncrement}
            onDelete = {this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

}

export default App;
