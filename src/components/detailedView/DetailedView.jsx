import { useLocation, Link } from 'react-router-dom';
import { ListGroup, Container, Image, Stack, Button } from 'react-bootstrap'
import dayjs from 'dayjs';

import './detailedView.css';

export const DetailedView = () => {
    const location = useLocation();   
    const deatiledInfo = location.state.props;
    const { title, first, last } = deatiledInfo.name;
    const { age, date } = deatiledInfo.dob;
    const { city, country, postcode, state, street } = deatiledInfo.location;

    // Date of Birth
    const dob = dayjs(date).format('MM/DD/YYYY');
    const addressFormatted = 
    `${street.number} ${street.name}
     ${postcode} ${city}, ${state} 
     ${country}
    `;

    return (
        <>
            <div className='background'>
            <br/>
            <Container className='detailed-container'>
                <Stack gap={3} className='detailed-stack'>
                        <Image thumbnail src={deatiledInfo.picture.large} className='detailed-image'/>
                            <b>{title} {first} {last}</b> 
                            <ListGroup variant='flush'>
                                    <ListGroup.Item>Age: {age}</ListGroup.Item>
                                    <ListGroup.Item>Phone Number: {deatiledInfo.phone}</ListGroup.Item>
                                    <ListGroup.Item>Address: {addressFormatted}</ListGroup.Item>
                                    <ListGroup.Item>DOB: {dob}</ListGroup.Item>
                                    <ListGroup.Item>Email: {deatiledInfo.email}</ListGroup.Item>
                            </ListGroup>
                </Stack>
                <br/>
                <Link to={'/'} >
                    <Button>
                        Main Directory
                    </Button>
                </Link>
            </Container>
            </div>
        </>
    )
}