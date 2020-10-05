import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import volunteerImg from '../../resources/images/extraVolunteer.png';
import './VolunteerDetails.css';

const VolunteerDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [volunteerDetails, setVolunteerDetails] = useState([]);

    useEffect(()=>{
        fetch('https://secret-basin-86464.herokuapp.com/volunteerInformation?email=' + loggedInUser.email)
        .then(response=> response.json())
        .then(data=> {
            // console.log(data);
            setVolunteerDetails(data)
        });
    }, [])
    const deleteVolunteer = (id) =>{
        fetch('https://secret-basin-86464.herokuapp.com/deleteVolunteerEvent',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                id:id
            }
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                const volunteer= volunteerDetails.filter (data=> data._id !== id)
                setVolunteerDetails(volunteer);
                alert('Volunteer Deleted Successfully');
            }
        })
    }

   const renderJambotron = (volunteer, index) =>{
        return (
            <Jumbotron key={index} className="box">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={volunteerImg} className="volunteer-img" alt=""/>
                        <div className="ml-3">
                            <h3>{volunteer.name}</h3>
                            <p>{volunteer.email}</p>
                            <p>{volunteer.register.dob}</p>
                            <p>{volunteer.register.description}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                        <Button onClick={() => deleteVolunteer(volunteer._id)} variant="primary">Cancel</Button>
                    </div>
                </div>
            </Jumbotron>
        );
   };
   return <Container  className="grid">{volunteerDetails.map(renderJambotron)}</Container>;
};

export default VolunteerDetails;