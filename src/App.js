import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
//import Counter from './components/counter';

// Parent Component


class App extends Component {
  state = {
    counters: [
        { id: 1, value: 4 }, 
        { id: 2, value: 0 }, 
        { id: 3, value: 0 }
    ]
  };


  handleIncrement = counter => {
    const counters = [...this.state.counters];  // spread operator
    // to find the index of the array
    const index = counters.indexOf(counter);
    counters[index] = {...counter};  // cloning counter object that we recive as an argument, so the object remains unchanged
    counters[index].value++;
    this.setState({ counters });
    //console.log(this.state.counters[index],'handling increment');
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    if(counters[index].value >= 1){
    this.setState({ counters });
    }
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    console.log(counters,'cc')
    this.setState({ counters });
    console.log('Event handler called', counterId);
  }
  

  render() {
    return (
      <React.Fragment>  
        <NavBar totalCount={this.state.counters.filter(c => c.value > 0).length}/>
          <main className="container">
            <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}/>
          </main>
      </React.Fragment>
    );
  }
}

export default App;
