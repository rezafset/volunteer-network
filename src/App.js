import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Volunteer from './components/Volunteer/Volunteer';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Header></Header>
          <Register></Register>
        </Route>
        <Route path="/">
          <Header></Header>
          <Banner></Banner>
          <Volunteer></Volunteer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
