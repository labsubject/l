import React, { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(Number(a) + Number(b));
  };

  const subtract = () => {
    setResult(Number(a) - Number(b));
  };

  const multiply = () => {
    setResult(Number(a) * Number(b));
  };

  const divide = () => {
    setResult(Number(a) / Number(b));
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        onChange={(e) => setA(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        onChange={(e) => setB(e.target.value)}
      />

      <br />

      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>×</button>
      <button onClick={divide}>÷</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;