import React from 'react';
import { Button, Col, Jumbotron } from 'react-bootstrap';
import volunteerImg from '../../resources/images/extraVolunteer.png';
import './VolunteerInfo.css';

const VolunteerInfo = (props) => {
    const {name, email} = props.volunteer;
    const {dob, description} = props.volunteer.register;
    return (
        <Col lg={6}>
            <Jumbotron>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={volunteerImg} className="volunteer-img" alt=""/>
                        <div className="ml-3">
                            <h3>{name}</h3>
                            <p>{email}</p>
                            <p>{dob}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                        <Button variant="primary">Cancel</Button>
                    </div>
                </div>
            </Jumbotron>
        </Col>
    );
};

export default VolunteerInfo;