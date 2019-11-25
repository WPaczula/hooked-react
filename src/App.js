/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import logo from './logo.svg';
import Comparison from './00-comparison'
import LetsHook from './04-lets-hook'
import CustomHook from './05-custom-hooks/hook'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
          Hooked React <span role="img" aria-label="hook">🎣</span>
        </span>
      </header>
      <main className="App-main">
        <Comparison />
        <section>
          <h1>
            Teraz troszkę infa 🏃‍
          </h1>
        </section>
        <LetsHook />
        <CustomHook />
      </main>
    </div>
  );
}

export default App;
