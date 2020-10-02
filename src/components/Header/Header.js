import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../resources/logos/mainLogo.png';
import './Header.css';

const Header = () => {
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
                        <Link class="nav-link mt-2">Home</Link>                      
                        <Link class="nav-link mt-2">Destination</Link>
                        <Link class="nav-link mt-2">Event</Link>
                        <Link class="nav-link mt-2">Blog</Link>
                        <Link class="nav-link">
                            <Button variant="primary">Login</Button>
                        </Link>
                        <Link class="nav-link">
                            <Button variant="dark">Admin</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Header;