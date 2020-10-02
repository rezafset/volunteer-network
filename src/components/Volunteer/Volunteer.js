import React from 'react';
import { Container, Row } from 'react-bootstrap';
import VolunteerActivity from '../VolunteerActivity/VolunteerActivity';
const activity = [
    {
        image: 'animalShelter.png',
        name: 'Animal Shelter'
    },
    {
        image: 'babySit.png',
        name: 'Baby Sit'
    },
    {
        image: 'birdHouse.png',
        name: 'Bird House'
    },
    {
        image: 'childSupport.png',
        name: 'Child Support'
    },
    {
        image: 'cleanWater.png',
        name: 'Clean Water'
    },
    {
        image: 'clearnPark.png',
        name: 'Clearn Park'
    },
    {
        image: 'clothSwap.png',
        name: 'Cloth Swap'
    },
    {
        image: 'driveSafety.png',
        name: 'Drive Safety'
    },
    {
        image: 'foodCharity.png',
        name: 'Food Charity'
    },
    {
        image: 'goodEducation.png',
        name: 'Good Education'
    },
    {
        image: 'ITHelp.png',
        name: 'IT Help'
    },
    {
        image: 'libraryBooks.png',
        name: 'Library Books'
    },
    {
        image: 'musicLessons.png',
        name: 'Music Lessons'
    },
    {
        image: 'newBooks.png',
        name: 'New Books'
    },
    {
        image: 'refuseShelter.png',
        name: 'Refuse Shelter'
    },
    {
        image: 'riverClean.png',
        name: 'River Clean'
    },
    {
        image: 'schoolSuffiles.png',
        name: 'School Suffiles'
    },
    {
        image: 'studyGroup.png',
        name: 'Study Group'
    },
    {
        image: 'stuffedAnimals.png',
        name: 'Stuffed Animals'
    },
    {
        image: 'voteRegister.png',
        name: 'Vote Register'
    }

]

const Volunteer = () => {
    return (
        <Container className="py-4">
            <Row>
                {
                    activity.map(activity=> <VolunteerActivity activity={activity}></VolunteerActivity>)
                }
            </Row>
        </Container>
    );
};

export default Volunteer;