import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    
    render() { 
        //Object Destructuring for a clean code
        const {onReset, counters, onIncrement, onDelete} = this.props;
        return ( 
        <div>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
            {counters.map( c => 
                <Counter 
                    key={c.id} 
                    counter={c}
                    onReset={onReset} 
                    onIncrement={onIncrement}
                    onDelete={onDelete} 
                >
                </Counter>
            )}
        </div>);
    }
}
 
export default Counters;