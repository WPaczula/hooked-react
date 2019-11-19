import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import logo from './logo.svg';
import Why from './00-why'
import Comparison from './01-comparison'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hooked React <span role="img" aria-label="hook">🎣</span>
        </p>
      </header>
      <main className="App-main">
        <Comparison />
        <Why />
      </main>
    </div>
  );
}

export default App;
