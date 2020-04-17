/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import logo from './logo.svg';
import Comparison from './00-comparison';
import Issues from './01-issues';
import LetsHook from './02-lets-hook';
import CustomHook from './04-custom-hooks/hook';
import Solutions from './05-solutions';
import Rules from './03-rules';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
          Hooked React{' '}
          <span role="img" aria-label="hook">
            🎣
          </span>
        </span>
      </header>
      <main className="App-main">
        <Comparison />
        <section>
          <h1>Jakie są problemy z Reactem? 🤔</h1>
        </section>
        <Issues />
        <LetsHook />
        <Rules />
        <CustomHook />
        <Solutions />
      </main>
    </div>
  );
}

export default App;
