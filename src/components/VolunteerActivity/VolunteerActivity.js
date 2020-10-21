import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './VolunteerActivity.css';

const VolunteerActivity = (props) => {
    const {image, description } = props.activity;
    return (
        <Col lg={3}>
            <Link to= {`/register/${description}`} style={{textDecoration: 'none'}}>
                <Card className="mb-3 card">
                    <Card.Img  variant="top" src={require(`../../resources/images/${image}`)} />
                    <Card.Footer style={{ backgroundColor: props.color}}>
                        <h5 className="text-center text-light">{description}</h5>
                    </Card.Footer>
                </Card>
            </Link>
        </Col>
    );
};

export default VolunteerActivity;