import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { Navigation, Aside, Content, Footer } from './components'; 

const  App = () => {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Aside />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
