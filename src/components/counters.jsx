import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
  render() {
    const { onReset, onDelete, onDecrement, onIncrement, counters } = this.props;  // Object destructuring
    return (
      <div>
        <button onClick={onReset} className="btn btn-sm btn-primary m-2 mt-2">Reset</button>
        {counters.map(counter =>
         <Counter key ={counter.id} value = {counter.value} onDelete = {onDelete} counter = {counter} onIncrement = {onIncrement} onDecrement = {onDecrement}> 
                <h1>{counter.id}</h1>
         </Counter>    
        )}
      </div>
    );
  }
}
 
export default Counters;