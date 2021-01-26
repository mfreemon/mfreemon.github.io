import React, { useState, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import ContactUs from './Components/ContactUs';
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Display from './Components/Display';
import Footer from './Components/Footer'
import './app.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="myapp">
          <Nav />
          <Route exact path={["/", "/landing"]} component={Display}/>
          <Route path='/about' render={(props) => (<About {...props}/>)} />
          <Route path='/work' component={Work} />
          <ContactUs />
          <Footer />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
