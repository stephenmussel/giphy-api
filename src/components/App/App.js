import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useState }  from 'react';
import Search from '../Search/Search';

function App() {

  const dispatch = useDispatch();

  /* store for displaying random gif
  const random = useSelector(store => store.random); 
    */

  const [newSearch, setNewSearch] = useState('');
  const [limit, setLimit] = useState('');
  const [rating, setRating] = useState('');
  const [results, setResults] = useState([]);

  /* for displaying randmon gif

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
  */

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicked submit');

    axios.post('/search', {search: newSearch, rating: rating, limit: limit})
      .then(response => {
        console.log('response.data:', response.data);
        console.log('response.data...:', response.data[0].images.original.url);
        console.log('search: ', newSearch);
        console.log(`newSearch: ${newSearch}, rating: ${rating}, and limit: ${limit}`);
        
        setResults(response.data);

        // clears inputs
        setNewSearch('');
        setRating('');
        setLimit('');
        
      }).catch(err => {
        console.log(err);
      });
  };


  // Renders the entire app on the DOM
  return (
    <div>
      <header className="App-header">
        {/* <h1>Random Giphy API</h1> */}
        <h1>Giphy API</h1>
      </header>
      <br />
      {/* {JSON.stringify(random)} */}
      {/* <img src={random} alt="random gif"/>
      <br />
      <button onClick={fetchRandom} style={{ marginTop: 5, marginBottom: 5 }}>Refresh</button> */}
      <Search 
        handleSubmit={handleSubmit}
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        rating={rating}
        setRating={setRating}
        limit={limit}
        setLimit={setLimit}
        results={results}
      />
      
    </div>
  );
}

export default App;
