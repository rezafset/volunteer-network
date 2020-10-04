import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NewEventInfo from '../NewEventInfo/NewEventInfo';

const NewEvent = () => {
    const [newEvent, setNewEvent] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/newEventList')
        .then(response=> response.json())
        .then(data=>setNewEvent(data));
    }, [])
    return (
        <Container className="py-2">
            <h3 className="text-center py-3">New Event Created By Admin</h3>
            <Row>
                {
                    newEvent.map(event=> <NewEventInfo key={event._id} event={event}></NewEventInfo>)
            
                }
            </Row>
        </Container>
    );
};

export default NewEvent;