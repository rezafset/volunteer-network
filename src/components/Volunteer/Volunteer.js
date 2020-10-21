import React from 'react';
import { Container, Row } from 'react-bootstrap';
import VolunteerActivity from '../VolunteerActivity/VolunteerActivity';
const activity = [
    {
        image: 'animalShelter.png',
        description: 'Animal Shelter'
    },
    {
        image: 'babySit.png',
        description: 'Baby Sit'
    },
    {
        image: 'birdHouse.png',
        description: 'Bird House'
    },
    {
        image: 'childSupport.png',
        description: 'Child Support'
    },
    {
        image: 'cleanWater.png',
        description: 'Clean Water'
    },
    {
        image: 'clearnPark.png',
        description: 'Clearn Park'
    },
    {
        image: 'clothSwap.png',
        description: 'Cloth Swap'
    },
    {
        image: 'driveSafety.png',
        description: 'Drive Safety'
    },
    {
        image: 'foodCharity.png',
        description: 'Food Charity'
    },
    {
        image: 'goodEducation.png',
        description: 'Good Education'
    },
    {
        image: 'ITHelp.png',
        description: 'IT Help'
    },
    {
        image: 'libraryBooks.png',
        description: 'Library Books'
    },
    {
        image: 'musicLessons.png',
        description: 'Music Lessons'
    },
    {
        image: 'newBooks.png',
        description: 'New Books'
    },
    {
        image: 'refuseShelter.png',
        description: 'Refuse Shelter'
    },
    {
        image: 'riverClean.png',
        description: 'River Clean'
    },
    {
        image: 'schoolSuffiles.png',
        description: 'School Suffiles'
    },
    {
        image: 'studyGroup.png',
        description: 'Study Group'
    },
    {
        image: 'stuffedAnimals.png',
        description: 'Stuffed Animals'
    },
    {
        image: 'voteRegister.png',
        description: 'Vote Register'
    }

]

const Volunteer = () => {
    return (
        <Container className="py-4">
            <Row>
                {
                    activity.map(activity=>{
                        let color = ['#FFBD3E','#FF7044','#3F90FC', '#421FCF'];
                        const random = Math.floor(Math.random()*4)
                        return (
                            <VolunteerActivity activity={activity} color={color[random]}></VolunteerActivity>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default Volunteer;