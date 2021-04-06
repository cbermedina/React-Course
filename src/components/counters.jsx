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
     };

     handlerIncrement = counter =>{
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index]= {...counter};
       counters[index].value++;
       this.setState({counters});
     }

     handleReset = () => {
      const counters = this.state.counters.map( c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
     };

     handleDelete = counterId => {
       console.log('Event handler delete called', counterId);
       const counters = this.state.counters.filter(c => c.id !== counterId);   
       this.setState({counters});
     };

    render() { 
        return (<div>
            <button 
            onclick={this.handleReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter =>(
                <Counter 
                   key={counter.id} 
                   onDelete={this.handleDelete} 
                   onIncrement={this.handlerIncrement}
                   counter={counter}>
                  <h4>Counter #{counter.id}</h4>
                </Counter>
            ))}
        </div>);
    }
}
 
export default Counters;