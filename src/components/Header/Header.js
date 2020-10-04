import React, { useContext } from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../resources/logos/mainLogo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext (UserContext); 
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Container>
                <Link to="/" class="navbar-brand">
                    <img src={logo} className="main-logo" alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-nav ml-auto">
                        <Link to="/" class="nav-link mt-2">Home</Link>                      
                        <Link to="/newEventList" class="nav-link mt-2">Event</Link>
                        <Nav.Link className="text-dark mt-2">{loggedInUser.name}</Nav.Link>
                        {
                            loggedInUser.email ? <Link to="/login" onClick={()=> setLoggedInUser({})}><Button className="mt-2" variant="primary">Log Out</Button></Link>
                            :
                            <Link to="/login" class="nav-link">
                                <Button variant="primary">Login</Button>
                            </Link>
                        }                       
                        <Link to="/admin" class="nav-link">
                            <Button variant="dark">Admin</Button>
                        </Link>                       
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Header;