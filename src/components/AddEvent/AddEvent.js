import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const AddEvent = () => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data);
        const eventDetails = { event: data};
        fetch('http://localhost:5000/addEvent',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventDetails)
        })
        .then(response=> response.json())
        .then(data=> {
            console.log(data);
            if(data){
                alert('Event Add successfully');
                history.push("/newEventList");
            }
        })
    };
    return (
        <Container className="event">
            <h4>Add Event</h4>
            <Row className="py-3">
                <Col>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Event Title</Form.Label>
                                <Form.Control type="text" name="name" ref={register({ required: true })} placeholder="Enter Title" />
                                {errors.name && <span className="error">Name is required</span>}
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Event Date</Form.Label>
                                <Form.Control type="date" name="dob" ref={register({ required: true })} placeholder="Enter Date" />
                                {errors.dob && <span className="error">Date is required</span>}
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <textarea class="form-control" rows="5" type="text" name="description" ref={register({ required: true })}></textarea>
                            {errors.description && <span className="error">Destination is required</span>}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddEvent;