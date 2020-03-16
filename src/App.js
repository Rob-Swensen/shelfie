import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import {HashRouter} from 'react-router-dom';
import './Reset.css';
import './App.css';
import routes from './routes';

class App extends Component {

  render(){
    return(
      <HashRouter>
        <Header/>
          {routes}
      </HashRouter>
    )
  }
}

export default App;
