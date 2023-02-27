import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Component/Todo'

function App() {
  return (
    <div className="App">
      <h1>#Todo</h1>
      <div className='Nav-bar'>
        <button className='btn'>All</button>
        <button className='btn'>Working</button>
        <button className='btn'>Completed</button>
        <hr />
      </div>
      <Todo />
    </div>
  );
}

export default App;
