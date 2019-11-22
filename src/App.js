import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import logo from './logo.svg';
import Comparison from './00-comparison'

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
      </main>
    </div>
  );
}

export default App;
