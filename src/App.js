import React, { createContext, useState } from 'react';
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
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import VolunteerDetails from './components/VolunteerDetails/VolunteerDetails';
import Admin from './components/Admin/Admin';
import NewEvent from './components/NewEvent/NewEvent';
import Footer from './components/Footer/Footer';
import './App.css';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/register">
            <Header></Header>
            <Register></Register>
          </PrivateRoute>
          <Route path="/login">
            <Header></Header>
            <Login></Login>
          </Route>
          <Route path="/volunteerDetails">
            <Header></Header>
            <VolunteerDetails></VolunteerDetails>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/newEventList">
            <Header></Header>
            <NewEvent></NewEvent>
          </Route>
          <Route path="/">
            <Header></Header>
            <Banner></Banner>
            <Volunteer></Volunteer>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
