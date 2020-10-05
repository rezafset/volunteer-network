import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container className="p-4 =">
               <p className="text-center text-light mb-0">Copyright &copy; 2020 Volunteer Network | Developed by : <a href="https://www.linkedin.com/in/ahmed-reza-shah-a96764158/" target="_blank" className="text-success">Reza Shah</a></p>
            </Container>
        </div>
    );
};

export default Footer;