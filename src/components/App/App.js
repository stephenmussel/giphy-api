import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const fetchRandom = () => {
    console.log('in fetchRandom');
    
  };

  useEffect(() => {
    fetchRandom();
  }, [])


  // Renders the entire app on the DOM
  return (
    <div>
      <header className="App-header">
        <h1>Random Giphy API</h1>
      </header>
      
      <p>Results go here</p>
    </div>
  );
}

export default App;
