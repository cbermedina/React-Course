import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters: [
            { id:0, value:0 },
            { id:1, value:1 },
            { id:2, value:2 },
            { id:3, value:3 },
            { id:4, value:4 },
            { id:5, value:5 }
        ]
     }
     handleDelete = counterId => {
       console.log('Event handler delete called', counterId);
       const counters = this.state.counters.filter(c => c.id !== counterId);   
       this.setState({counters});
     }

    render() { 
        return (<div>
            {this.state.counters.map(counter =>(
                <Counter 
                   key={counter.id} 
                   onDelete={this.handleDelete} 
                   counter={counter}>
                  <h4>Counter #{counter.id}</h4>
                </Counter>
            ))}
        </div>);
    }
}
 
export default Counters;