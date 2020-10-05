import React, { useContext, useState } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../config/firebase';
import { UserContext } from '../../App';
import { Container, Row } from 'react-bootstrap';
import google from '../../resources/logos/google.png';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        success: false,
        error: ''
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(response => {
          const {displayName, email} = response.user;
          console.log(response);
          const newUser = {
            isSignIn: true,
            name: displayName,
            email: email
        }
          setUser(newUser);
          setLoggedInUser(newUser);
          history.replace(from);
          
        })
        .catch(error =>{
          console.log(error);
          console.log(error.message);
        })
    }
    
    return (
        <Container className="d-flex justify-content-center login-area">
            <Row>
                <h5><b>Login With</b></h5>
                <div onClick={handleSignIn} className="btn auth mt-2 p-2">
                    <div>
                        <img src={google} alt=""/>
                    </div>
                    <div>
                        <span>Continue with google</span>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Login;