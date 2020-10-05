import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css';

const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const onSubmit = data => {
        console.log(data);
        const volunteerDetails = {...loggedInUser, register: data};
        fetch('https://secret-basin-86464.herokuapp.com/addVolunteer',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerDetails)
        })
        .then(response=> response.json())
        .then(data=> {
            console.log(data);
            if(data){
                alert('Volunteer Add successfully');
                history.push("/volunteerDetails");
            }
        })
    }; 
    return (
        <Container className="d-flex justify-content-center">
            <Row>
                <div className="py-5 my-5">
                    <form className="register-form p-5" onSubmit={handleSubmit(onSubmit)}>
                        <h5><b>Register as a Volunteer</b></h5>
                        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Name" />
                        {errors.name && <span className="error">Name is required</span>}
                        
                        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Email"/>
                        {errors.email && <span className="error">Email is required</span>}

                        <input type="date" name="dob" ref={register({ required: true })} placeholder="date"/>
                        {errors.dob && <span className="error">Date is required</span>}
                        
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