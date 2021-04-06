import NavBar from './components/navBar'
import Counters from './components/counters';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <main className="container">
        <Counters/>
      </main>
    </React.Fragment>
  );
}

export default App;
