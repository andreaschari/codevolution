import React from 'react';
import './App.css';
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Message/>
      <Greet name="James" surname="Bond"/>
      <Counter/>
    </div>
  );
}

export default App;
