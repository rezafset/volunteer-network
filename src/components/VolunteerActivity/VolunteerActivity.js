import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './VolunteerActivity.css';

const VolunteerActivity = (props) => {
    const {image, name} = props.activity;
    return (
        <Col lg={3}>
            <Link to="/register">
                <Card className="mb-3 card-container">
                    <Card.Img variant="top" src={require(`../../resources/images/${image}`)} />
                    <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                        <div className="bg-primary bg-block">
                            <h5 className="text-center text-light">{name}</h5>
                        </div>
                    </Card.ImgOverlay>
                    {/* <Card.Footer className="bg-info">
                        <h5 className="text-center">{name}</h5>
                    </Card.Footer> */}
                </Card>
            </Link>
        </Col>
    );
};

export default VolunteerActivity;