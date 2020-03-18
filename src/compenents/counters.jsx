import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = { 
        counters : [
            {id: 1, value: 0},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 4}
        ]
     }
    render() { 
        return ( <div>
            {this.state.counters.map( c => 
            <Counter key={c.id} value={c.value} onDelete={this.handleDelete}>
            </Counter>
            )}
        </div>);
    }

    handleDelete = () => {
        console.log('DELETE Called');
    };
}
 
export default Counters;