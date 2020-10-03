import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import VolunteerList from '../VolunteerList/VolunteerList';

const VolunteerRegister = () => {
    const [volunteerList, setVolunteerList] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/volunteerList')
        .then(response=> response.json())
        .then(data=>setVolunteerList(data));
    }, [])

    return (
        <Container>
            <h1>List</h1>
            {
                volunteerList.map(volunteer=> 
                  <div>
                    <li class="list-group-item">{volunteer.name}</li>
                    <li class="list-group-item">{volunteer.email}</li>
                    <li class="list-group-item">{volunteer.register.dob}</li>
                    <li class="list-group-item">{volunteer.register.description}</li>
                  </div> )
            }
        </Container>
    );
};

export default VolunteerRegister;