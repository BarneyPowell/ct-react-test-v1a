import { useState } from 'react';
import CatFactsList from './components/CatFactsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>&#128568; Cat facts</h1>
        <CatFactsList />
      </div>
    </div>
  );
}

export default App;
