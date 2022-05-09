import React from 'react';
import './App.css';
import Search from '../Search/Search';
import Random from '../Random/Random';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  // Renders the entire app on the DOM
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/random" component={Random} />
        <Route exact path="/search" component={Search} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
