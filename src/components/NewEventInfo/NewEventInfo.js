import React from 'react';
import { Col } from 'react-bootstrap';

const NewEventInfo = (props) => {
    const {name, dob, description} = props.event.event;
    return (
        <Col lg={4}>
            <div class="card text-white bg-secondary mb-3">
                <div class="card-header">
                    <h3>{name}</h3>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{dob}</h5>
                    <p class="card-text">{description}.</p>
                </div>
            </div>
        </Col>
    );
};

export default NewEventInfo;