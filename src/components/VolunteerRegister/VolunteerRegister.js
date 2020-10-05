import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const VolunteerRegister = () => {
    const [volunteerList, setVolunteerList] = useState([]);
    useEffect(()=>{
        fetch('https://secret-basin-86464.herokuapp.com/volunteerList')
        .then(response=> response.json())
        .then(data=>setVolunteerList(data));
    }, [])

    const deleteVolunteer = (id) =>{
        fetch('https://secret-basin-86464.herokuapp.com/deleteVolunteer',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                id:id
            }
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                const volunteer= volunteerList.filter (data=> data._id !== id)
                setVolunteerList(volunteer);
                alert('Volunteer Deleted Successfully');
            }
        })
    }

    return (
        <Container >
            <h4>Volunteer Register List</h4>
            <Table bordered hover className="my-4">
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