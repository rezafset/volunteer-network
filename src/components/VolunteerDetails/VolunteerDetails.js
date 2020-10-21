import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import volunteerImg from '../../resources/images/extraVolunteer.png';
import './VolunteerDetails.css';

const VolunteerDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [volunteerDetails, setVolunteerDetails] = useState([]);

    useEffect(() => {
        fetch('https://secret-basin-86464.herokuapp.com/volunteerInformation?email=' + loggedInUser.email)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setVolunteerDetails(data)
            });
    }, [])
    const deleteVolunteer = (id) => {
        fetch('https://secret-basin-86464.herokuapp.com/deleteVolunteerEvent', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                id: id
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const volunteer = volunteerDetails.filter(data => data._id !== id)
                    setVolunteerDetails(volunteer);
                    alert('Volunteer Deleted Successfully');
                }
            })
    }
    return (
        <div className="container py-5">
            <div className="row w-100">
                {
                    volunteerDetails.map(volunteer =>
                        <div className="col-md-6">
                            <div className="card mb-4" style={{ maxWidth: '550px' }}>
                                <div className="row">
                                    <div className="col-md-4 mt-2">
                                        <img src={volunteerImg} className="volunteer-img pl-2" alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title font-weight-bold">{volunteer.name}</h3>
                                            {/* <p>{volunteer.email}</p> */}
                                            <p>{volunteer.register.dob}</p>
                                            <p>{volunteer.register.description}</p>
                                            <div className="d-flex justify-content-end">
                                                <button onClick={() => deleteVolunteer(volunteer._id)} className="btn" style={{ backgroundColor: '#DBDBDB' }}>
                                                    Cancel
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default VolunteerDetails;