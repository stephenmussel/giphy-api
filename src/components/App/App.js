import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useState }  from 'react';
import Search from '../Search/Search';
import Random from '../Random/Random';
import Header from '../Header/Header';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();

  const [newSearch, setNewSearch] = useState('');
  const [limit, setLimit] = useState('');
  const [rating, setRating] = useState('');
  const [results, setResults] = useState([]);

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
      <Header />
      <Router>
        <Route exact path="/" component={Random}/>
        {/* <Route exact path="/" component={Search}/> */}
      </Router>
      {/* <Random
        fetchRandom={fetchRandom}
      />*/}
      {/* <Search 
        handleSubmit={handleSubmit}
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        rating={rating}
        setRating={setRating}
        limit={limit}
        setLimit={setLimit}
        results={results}
      />  */}
      
    </div>
  );
}

export default App;
