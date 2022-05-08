import React from 'react';
import './App.css';
import Search from '../Search/Search';
import Random from '../Random/Random';
import Header from '../Header/Header';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  // Renders the entire app on the DOM
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={Random} />
        <Route exact path="/search" component={Search} />
      </Router>
    </div>
  );
}

export default App;
