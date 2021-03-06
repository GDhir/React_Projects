import React, {Component} from 'react';
import logo from './logo.svg';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css'

import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
