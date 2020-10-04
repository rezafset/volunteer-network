import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import logo from '../../resources/logos/mainLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import VolunteerRegister from '../VolunteerRegister/VolunteerRegister';
import AddEvent from '../AddEvent/AddEvent';

const Admin = () => {
    const { path, url } = useRouteMatch();
    return (
        <Container className="py-3">
            <Row>
                <Col lg={3}>
                    <Link to="/">
                        <img src={logo} className="main-logo" alt=""/>
                    </Link>
                    <Nav.Link className="py-3 mt-3">
                        <Link to="/admin">
                            <FontAwesomeIcon icon={faUsers} className="mr-1" />
                            Volunteer register list
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={`${url}/addEvent`}>
                            <FontAwesomeIcon icon={faPlus} className="mr-1" />
                            Add Event
                        </Link>
                    </Nav.Link>
                </Col>
                <Col lg={9}>
                    <Switch>
                        <Route exact path={path}>
                            <VolunteerRegister></VolunteerRegister>
                        </Route>
                        <Route path={`${path}/addEvent`}>
                            <AddEvent></AddEvent>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;