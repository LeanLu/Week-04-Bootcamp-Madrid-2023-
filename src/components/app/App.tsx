import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "../counter/counter";
import { CounterComplex } from "../counter/counter.complex";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Counter></Counter>
      <CounterComplex></CounterComplex>
    </>
  );
}

export default App;