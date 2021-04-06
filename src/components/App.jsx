import NavBar from './navBar'
import Counters from './counters';
import '../App.css';
import React, { Component } from 'react';

class App extends Component {
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
  this.setState({ counters });
  console.log(this.state.counters)
 };

 handleDelete = counterId => {
   console.log('Event handler delete called', counterId);
   const counters = this.state.counters.filter(c => c.id !== counterId);   
   this.setState({counters});
 };

  render() { 
    return (<React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0).length} />
      <main className="container">
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handlerIncrement}
          onDelete={this.handleDelete}/>
      </main>
    </React.Fragment>);
  }
}
 
export default App;
