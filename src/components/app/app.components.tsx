import React from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';
import Footer from '../footer/footer.component';

import Header from '../header/header.components';

import './app.components.css';



const App: React.FC = () => {
  return (
    <Router>
      <>
        <Header />
        <Footer />
      </>
    </Router>
    
  )
}

export default App;
