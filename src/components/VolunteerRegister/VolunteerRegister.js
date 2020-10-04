import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const VolunteerRegister = () => {
    const [volunteerList, setVolunteerList] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/volunteerList')
        .then(response=> response.json())
        .then(data=>setVolunteerList(data));
    }, [])

    const deleteVolunteer = (_id) =>{
        fetch('http://localhost:5000/deleteVolunteer' , {
            method: 'DELETE',
            headers: { "Content-Type": "Application/JSON" },
            body: JSON.stringify({ id: _id }),
        })
        .then(response=> response.json())
        .then(result=>{
            if(result){
                alert('Volunteer Deleted Successfully');
            }
        })     
    }

    return (
        <Container>
            <h4>Volunteer Register List</h4>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registration Date</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>                   
                    {
                        volunteerList.map ( volunteer=> 
                            <tr>
                                <td>{volunteer.name}</td>
                                <td>{volunteer.email}</td>
                                <td>{volunteer.register.dob}</td>
                                <td>{volunteer.register.description}</td>
                                <td><button onClick={() => deleteVolunteer(volunteer._id)}>
                                    <FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        )   
                        
                    }                 
                </tbody>
            </Table>
        </Container>
    );
};

export default VolunteerRegister;