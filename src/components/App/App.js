import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const dispatch = useDispatch();
  const random = useSelector(store => store.random);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicked submit');
    
  }


  // Renders the entire app on the DOM
  return (
    <div>
      <header className="App-header">
        <h1>Random Giphy API</h1>
      </header>
  
      {/* {JSON.stringify(random)} */}
      <img src={random} alt="random gif"/>
      <br />
      <button onClick={fetchRandom} style={{ marginTop: 5, marginBottom: 5 }}>Refresh</button>
      <form onClick={handleSubmit}>
        <input placeholder="search" style={{ marginRight: 5 }}/>
        <input placeholder="rating" style={{ marginRight: 5 }}/>
        <input placeholder="limit" style={{ marginRight: 5 }}/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}

export default App;
