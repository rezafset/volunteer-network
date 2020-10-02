import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Register.css';

const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data); 
    return (
        <Container className="d-flex justify-content-center">
            <Row>
                <div className="py-5 my-5">
                    <form className="register-form p-5" onSubmit={handleSubmit(onSubmit)}>
                        <h5>Register as a Volunteer</h5>
                        <input name="name"  ref={register({ required: true })} placeholder="Name" />
                        {errors.name && <span className="error">Name is required</span>}
                        
                        <input name="email"  ref={register({ required: true })}  placeholder="Email"/>
                        {errors.email && <span className="error">Email is required</span>}
                        
                        <input name="description" ref={register({ required: true })}  placeholder="Description" />
                        {errors.description && <span className="error">Destination is required</span>}
                        
                        <input name="phone" ref={register({ required: true })}  placeholder="Phone Number"/>
                        {errors.phone && <span className="error">Phone Number is required</span>}
                        
                        <input className="btn-primary" type="submit" value="Register"/>
                    </form>
                </div>
            </Row>
        </Container>
    );
};

export default Register;