import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useState }  from 'react';
import Search from '../Search/Search';
import Random from '../Random/Random';

function App() {

  const dispatch = useDispatch();

  const [newSearch, setNewSearch] = useState('');
  const [limit, setLimit] = useState('');
  const [rating, setRating] = useState('');
  const [results, setResults] = useState([]);

  const fetchRandom = () => {
    console.log('in fetchRandom');

    axios.get('/random')
      .then(response => {
        console.log(response.data.data.images.downsized_medium.url);
        
        const action = {type: 'SET_RANDOM', payload: response.data.data.images.downsized_medium.url};
        dispatch(action);
      })
  };

  // useEffect(() => {
  //   fetchRandom();
  // }, [])


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
        <h1>Giphy API</h1>
        {/* do you feel luck? i make my own luck... */}
      </header>
      <Random
        fetchRandom={fetchRandom}
      />
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
