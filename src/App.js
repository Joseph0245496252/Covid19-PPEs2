//animation-modal
import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header';

class App extends React.Component {
  
  render() {
    return (
      <Router>
     <ToastContainer/>
      <Navbar />
      <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
     
      </Router>
    );
  }
}

export default App;