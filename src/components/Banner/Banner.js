import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container className="d-flex justify-content-center">                               
            <div className="py-2 mb-5">
                <h2 className="mt-md-5">I GROW BY HELPING PEOPLE IN NEED</h2>
                <Form className="d-flex pt-md-3 justify-content-center">
                    <FormControl type="text" className="w-50" placeholder="Search" />
                    <Button className="btn-primary" variant="primary">Search</Button>
                </Form>
            </div>
        </Container>
    );
};

export default Banner;