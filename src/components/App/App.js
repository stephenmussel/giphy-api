import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const dispatch = useDispatch();

  const fetchRandom = () => {
    console.log('in fetchRandom');

    axios.get('/random')
      .then(response => {
        console.log(response.data.data.images.downsized_medium.url);
        
        const action = {type: 'SET_RANDOM', payload: response.data.data.images.downsized_medium.url};
        dispatch(action);
      })
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
