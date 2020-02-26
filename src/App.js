import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import Logout from './components/Logout';
import Login from './components/Login';
import VitalForm from './components/VitalForm';
import Vitals from './components/Vitals';
import Main from './components/Main';

class App extends Component {
  
  render(){
    return(
      <div className="lato-font">
        <Router>
        <Header />
          <Switch>
            <Route path="/login" exact component={Login} /> 
            <Route path="/" exact component={Main} /> 
            <Route path="/vitalform" exact component={VitalForm} /> 
            <Route path="/vitals" exact component={Vitals} /> 
            <Route path="/logout" exact component={Logout} />
          </Switch> 
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
