import React from 'react';
import { Container } from 'react-bootstrap';

const VolunteerList = (props) => {
    const{name, email} = props.volunteer;
    const{dob, description} = props.volunteer.register;
    return (
        <Container>
            <h3>Volunteer Register List</h3>
            <div className="d-flex">
                <div>
                    <ul class="list-group">
                        <div>
                             <li class="list-group-item disabled">Name</li>
                             <li class="list-group-item">{name}</li>
                        </div>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default VolunteerList;