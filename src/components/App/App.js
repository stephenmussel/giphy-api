import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useState }  from 'react';

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
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="search"
          onChange={(event) => setNewSearch(event.target.value)}
          value={newSearch}
          style={{ marginRight: 5 }}
        />
        <input 
          placeholder="rating"
          onChange={(event) => setRating(event.target.value)}
          value={rating}
          style={{ marginRight: 5 }}
        />
        <input 
          placeholder="limit" 
          type="number"
          onChange={(event) => setLimit(event.target.value)}
          value={limit}
          style={{ marginRight: 5 }}
        />
        <input type="submit" value="submit"/>
      </form>
      {results.map((gif, i) => (
        <img key={i} src={gif.images.original.url}/>
      ))}
      
    </div>
  );
}

export default App;
