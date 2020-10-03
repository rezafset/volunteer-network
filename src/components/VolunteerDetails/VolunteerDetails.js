import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import VolunteerInfo from '../VolunteerInfo/VolunteerInfo';

const VolunteerDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [volunteerDetails, setVolunteerDetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/volunteerDetails?email=' + loggedInUser.email)
        .then(response=> response.json())
        .then(data=> {
            // console.log(data);
            setVolunteerDetails(data)
        });
    }, [])
    return (
        <Container className="py-3">
            <Row>
                {
                    volunteerDetails.map(volunteer=> <VolunteerInfo key={volunteer._id} volunteer={volunteer}></VolunteerInfo>)
                }
            </Row>
        </Container>
    );
};

export default VolunteerDetails;